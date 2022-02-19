<template>
  <v-container class="d-flex justify-center mt-15">
    <div class="mt-7">
      <v-row
        ><v-col cols="6">
          <v-btn to="/technik" height="120" width="120">
            <span class="text">Technik</span
            ><img src="/images/technik.jpg" height="125" width="125" alt="Technik" />
          </v-btn> </v-col
        ><v-col cols="6">
          <v-btn height="125" width="125">
            <span class="text">Bücher</span
            ><img src="/images/buecher.jpg" height="125" width="125" alt="Technik" /> </v-btn></v-col
      ></v-row>
      <v-row
        ><v-col class="mt-4" cols="6">
          <v-btn height="125" width="125">
            <span class="text">Sport</span
            ><img src="/images/sport.jpg" height="125" width="125" alt="Technik" /> </v-btn></v-col
        ><v-col class="mt-4" cols="6">
          <v-btn height="125" width="125">
            <span class="text">Haushalt</span
            ><img src="/images/haushalt.jpg" height="125" width="125" alt="Technik" /> </v-btn></v-col
      ></v-row>
      <div class="d-flex justify-center">
        <v-btn color="warning" width="210px" class="button mt-15">Produkt hinzufügen</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  components: {},
};
</script>

<style>
.text {
  position: absolute;
  color: white;
  font-size: 120%;
  font-weight: 20;
  font-family: 'Fredoka One';
}
.button {
  color: white;
  font-family: 'Fredoka One';
}
</style>
