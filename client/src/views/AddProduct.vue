<template>
  <div>
    <div class="d-flex justify-center mt-8">
      <h2 class="text text-center" justify-center text-center>Produkt Hinzufügen</h2>
      <v-btn @click="openCamera" color="warning" width="210px" class="button mt-15">Foto aufnehmen</v-btn>
      <Camera @img="getImage" v-if="hidden" @close="closeCamera" />
    </div>

    <v-container class="d-flex flex-column justify-center">
      <v-text-field class="mt-10" label="Name" solo dense v-model="name"></v-text-field>
      <v-text-field class="mt-10" label="Besitzer" solo dense v-model="owner"></v-text-field>
      <v-text-field class="mt-10" label="Preis" solo dense v-model="price"></v-text-field>
      <v-text-field class="mt-10" label="Wohnort" solo dense v-model="wohnort"></v-text-field>
      <v-text-field class="mt-10" label="Kategorie" solo dense v-model="category"></v-text-field>
      <v-btn
        @click="postProduct(name, owner, price, wohnort, category)"
        color="success"
        width="210px"
        class="button mt-15"
        
        >Hinzufügen</v-btn
      >
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import Camera from '@/components/Camera.vue';

export default {
  data() {
    return {
      name: '',
      owner: '',
      price: '',
      wohnort: '',
      category: '',
      hidden: false,
      rules: [(value) => !!value || 'Required.'],
      image: '',
    };
  },
  props: {
    img: {
      type: String,
    },
  },

  components: {
    Camera,
  },

  methods: {
    async postProduct(name, owner, price, wohnort, category) {
      try {
        await axios({
          url: '/products',
          method: 'POST',
          data: {
            name: name,
            owner: owner,
            price: price,
            wohnort: wohnort,
            category: category,
            image: this.image,
          },
        });
        this.$router.push({name: "Home"});
      } catch (error) {
        console.error(error);
      }
    },
    openCamera() {
      this.hidden = true;
    },
    getImage(img) {
      this.image = img;
      this.hidden = false;
    },
    closeCamera() {
      this.hidden = false;
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
