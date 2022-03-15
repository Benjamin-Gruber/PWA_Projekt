<template>
  <div>
    <div class="d-flex justify-center mt-8">
      <h2 class="text text-center" justify-center text-center>Produkt Hinzufügen</h2>
      <camera v-if="hidden" @img="getImage" @close="closeCamera" />
      <v-btn color="warning" width="210px" class="button mt-15">Foto aufnehmen</v-btn>
    </div>

    <v-container class="d-flex flex-column justify-center">
      <v-text-field class="mt-10" label="Name" solo dense v-model="product.name"></v-text-field>
      <v-text-field class="mt-10" label="Besitzer" solo dense v-model="product.owner"></v-text-field>
      <v-text-field class="mt-10" label="Preis" solo dense v-model="product.price"></v-text-field>
      <v-text-field class="mt-10" label="Wohnort" solo dense v-model="product.wohnort"></v-text-field>
      <v-text-field class="mt-10" label="Kategorie" solo dense v-model="product.category"></v-text-field>
      <v-btn @click="postProduct()" color="success" width="210px" class="button mt-15">Hinzufügen</v-btn>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      product: {},
      rules: [(value) => !!value || 'Required.'],
    };
  },

  methods: {
    async postProduct() {
      try {
        await axios({
          url: 'http://localhost:3000/products',
          method: 'POST',
          data: this.product,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  position: absolute;
  color: white;
  font-size: 120%;
  font-weight: 20;
  font-family: 'Fredoka One';
}
</style>
