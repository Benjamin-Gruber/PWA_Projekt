<template>
  <v-app>
    <v-app-bar class="d-flex justify-center" app color="white">
      <v-toolbar-title class="title">Lomiami</v-toolbar-title>
    </v-app-bar>

    <v-main class="background">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
.title {
  font-family: 'Fredoka One';
}
.background {
  background-color: #1a7e91;
}
.bottom {
  background-color: #eff9f7;
}
</style>
