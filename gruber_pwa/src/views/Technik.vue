<template>
  <v-container class="d-flex flex-wrap justify-center">
      <h4 class="mt-8 container text-center ueberschrift">Technik</h4>
      <v-card class="mt-10" max-width="344">
        <img height="200" width="250" src="/images/bsp.jpg" alt="IMAGE" />
        <v-card-title>Kamera</v-card-title>
        <v-card-text>
          <span class="preis font-weight-black">30€</span> <br />
          <v-btn color="warning mt-2"> Details </v-btn>
        </v-card-text>
      </v-card>
  </v-container>
</template>

<script>
export default {};
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
