<template>
  <v-container class="d-flex justify-center mt-15">
    <div class="mt-7">
      <v-row
        ><v-col cols="6">
          <v-btn to="/technik" height="120" width="120">
            <span class="text">Technik</span
            ><img src="/technik.JPG" height="125" width="125" alt="Technik" />
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn to="/buecher" height="125" width="125">
            <span class="text">Bücher</span
            ><img src="/buecher.JPG" height="125" width="125" alt="Technik" /> </v-btn></v-col
      ></v-row>
      <v-row
        ><v-col class="mt-4" cols="6">
          <v-btn to="/sport" height="125" width="125">
            <span class="text">Sport</span
            ><img src="/sport.JPG" height="125" width="125" alt="Technik" /> </v-btn></v-col
        ><v-col class="mt-4" cols="6">
          <v-btn to="/haushalt" height="125" width="125">
            <span class="text">Haushalt</span
            ><img
              src="/haushalt.JPG"
              height="125"
              width="125"
              alt="Technik"
            /> </v-btn></v-col
      ></v-row>
      <div class="d-flex justify-center">
        <v-btn to="/addProduct" color="warning" width="210px" class="button mt-15">Produkt hinzufügen</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
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
