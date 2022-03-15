<template>
  <v-container class="d-flex flex-wrap justify-center">
    <h4 class="mt-8 container text-center ueberschrift">Haushalt</h4>
    <v-btn to="/" class="ma-2" color="orange darken-2" dark>
      <v-icon dark left> mdi-arrow-left </v-icon>Back
    </v-btn>
    <div class="mb-5" v-for="h in haushalt" :key="h.id">
      <v-card class="mt-10" width="300">
        <div class="d-flex justify-center img">
          <img height="350" width="250" :src="h.image" alt="IMAGE" />
        </div>
        <v-card-title>{{ h.product }}</v-card-title>
        <v-card-text>
          <span class="font-weight-black">{{ h.owner }}</span> <br />
          <span class="preis font-weight-black">{{ h.price }}€</span> <br />
          <v-row>
            <v-spacer></v-spacer>
            <v-btn @click="delProduct(h.id)" color="red" icon><v-icon big>mdi-delete</v-icon></v-btn>
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
      haushalt: [],
    };
  },

  created() {
    this.getHaushalt();
  },

  methods: {
    async getHaushalt() {
      try {
        const { data } = await axios({
          url: `http://localhost:3000/products/haushalt`,
          method: 'GET',
        });
        this.haushalt = data;
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
        this.getHaushalt();
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
