<template>
  <v-container class="d-flex flex-wrap justify-center">
    <h4 class="mt-8 container text-center ueberschrift">Bücher</h4>
    <v-btn to="/" class="ma-2" color="orange darken-2" dark>
      <v-icon dark left> mdi-arrow-left </v-icon>Back
    </v-btn>
    <div class="mb-5" v-for="s in sport" :key="s.id">
      <v-card class="mt-10" width="300">
        <div class="d-flex justify-center img">
          <img height="350" width="250" :src="s.image" alt="IMAGE" />
        </div>
        <v-card-title>{{ s.product }}</v-card-title>
        <v-card-text>
          <span class="font-weight-black">{{ s.owner }}</span> <br />
          <span class="preis font-weight-black">{{ s.price }}€</span> <br />
          <v-row>
            <v-spacer></v-spacer>
            <v-btn @click="delProduct(s.id)" color="red" icon><v-icon big>mdi-delete</v-icon></v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      sport: [],
    };
  },

  created() {
    this.getSport();
  },

  methods: {
    async getSport() {
      try {
        const { data } = await axios({
          url: `http://localhost:3000/products/sport`,
          method: 'GET',
        });
        this.sport = data;
      } catch (error) {
        console.error(error);
      }
    },

    async delProduct(id) {
      try {
        await axios({
          url: `http://localhost:3000/products/${id}`,
          method: 'DELETE',
        });
        this.getSport();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.preis {
  color: #00c853;
  font-size: 125%;
}
.ueberschrift {
  color: white;
  font-size: 140%;
  font-weight: 20;
  font-family: 'Fredoka One';
}
.img {
  background-color: black;
}
</style>
