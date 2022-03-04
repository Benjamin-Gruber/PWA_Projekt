<template>
  <v-container class="d-flex flex-wrap justify-center">
    <h4 class="mt-8 container text-center ueberschrift">Technik</h4>
    <div class="mb-5" v-for="t in technik" :key="t.name">
      <v-card class="mt-10" max-width="344">
        <img height="200" width="250" :src="t.image" alt="IMAGE" />
        <v-card-title>{{ t.product }}</v-card-title>
        <v-card-text>
          <span class="font-weight-black">{{ t.owner }}</span> <br />
          <span class="preis font-weight-black">{{ t.price }}€</span> <br />
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
      technik: [],
    };
  },

  created() {
    this.getTechnik();
  },

  methods: {
    async getTechnik() {
      try {
        const { data } = await axios({
          url: `http://localhost:3000/products/technik`,
          method: 'GET',
        });
        this.technik = data;
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
</style>
