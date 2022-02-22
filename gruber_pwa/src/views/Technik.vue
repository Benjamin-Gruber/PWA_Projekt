<template>
  <v-container class="d-flex flex-wrap justify-center">
    <h4 class="mt-8 container text-center ueberschrift">Technik</h4>
    <div class="mb-5" v-for="t in technik" :key="t.name">
      <v-card class="mt-10" max-width="344">
        <img height="200" width="250" :src="t.image" alt="IMAGE" />
        <v-card-title>{{ t.product }}</v-card-title>
        <v-card-text>
          <span class="font-weight-black">{{ t.owner }}</span> <br />
          <span class="preis font-weight-black">{{ t.preis }}</span> <br />
          <v-btn color="warning mt-2"> Details </v-btn>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      technik: [
        {
          image: 'images/tech_products/kamera.jpg',
          product: 'Lumix Digitalkamera',
          owner: 'Max Mustermann',
          wohnort: 'Geblergasse 12/2/23, 1170 Wien',
          preis: 30,
        },
        {
          image: 'images/tech_products/cpu.jpg',
          product: 'INTEL CORE i5-7400',
          owner: 'Manuel Müller',
          wohnort: 'Thaliastraße 23/2/4, 1160 Wien',
          preis: 53,
        },
        {
          image: 'images/tech_products/grafikkarte.jpg',
          product: 'GeForce GTX 780',
          owner: 'Ahmed Ibraham',
          wohnort: 'Porzelangasse 3/4/12, 1090 Wien',
          preis: 70,
        },
      ],
    };
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
