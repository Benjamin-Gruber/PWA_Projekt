<template>
  <v-container class="d-flex flex-wrap justify-center">
    <h4 class="mt-8 container text-center ueberschrift">Bücher</h4>
    <v-btn to="/" class="ma-2" color="orange darken-2" dark>
      <v-icon dark left> mdi-arrow-left </v-icon>Back
    </v-btn>
    <div class="mb-5" v-for="b in buecher" :key="b.id">
      <v-card class="mt-10" width="300">
        <div class="d-flex justify-center img">
          <img height="350" width="250" :src="b.image" alt="IMAGE" />
        </div>
        <v-card-title>{{ b.product }}</v-card-title>
        <v-card-text>
          <span class="font-weight-black">{{ b.owner }}</span> <br />
          <span class="preis font-weight-black">{{ b.price }}€</span> <br />
          <v-btn color="warning mt-2"> Details </v-btn>
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
      buecher: [],
    };
  },

  created() {
    this.getBuecher();
  },

  methods: {
    async getBuecher() {
      try {
        const { data } = await axios({
          url: `http://localhost:3000/products/buecher`,
          method: 'GET',
        });
        this.buecher = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.preis {
  color: #ff0000;
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
