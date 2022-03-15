<template>
  <div>
    <div class="d-flex justify-center mt-8">
      <h2 class="text text-center" justify-center text-center>Produkt Hinzufügen</h2>
      <camera v-if="hidden" @img="getImage" @close="closeCamera" />
      <v-btn color="warning" width="210px" class="button mt-15">Foto aufnehmen</v-btn>
    </div>

    <v-container class="d-flex flex-column justify-center">
      <v-text-field class="mt-10" label="Name" solo dense></v-text-field>
      <v-text-field class="mt-10" label="Besitzer" solo dense></v-text-field>
      <v-text-field class="mt-10" label="Preis" solo dense></v-text-field>
      <v-text-field class="mt-10" label="Wohnort" solo dense></v-text-field>
      <v-text-field class="mt-10" label="Kategorie" solo dense></v-text-field>
      <v-btn color="success" width="210px" class="button mt-15">Hinzufügen</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rules: [(value) => !!value || 'Required.'],
    };
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
