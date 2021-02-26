<template>
  <v-app
    style="background-color:transparent"
  >

    <v-row
      style="z-index:0"
      class="ma-0 pa-0"
    >
      <v-carousel
        style="height:100vh;width:100vw;position:absolute"
        hide-delimiters
        height="100vh"
        cycle
        :show-arrows="false"
        continuos="false"
        interval=7000

      >
        <v-carousel-item
          style="height:100vh; width:100vw"
          eager
          transition="my-carousel"

          v-for="(item,i) in items"
          :key="i"

        >
          <v-img :src="item.src" height="100%" eager/>
        </v-carousel-item>

      </v-carousel>
    </v-row>
    <v-row
      class="ma-0 pa-0 body"
      style="position:absolute;background-color:#EAEAEA;width:100vw;top:100%"
    >
      <v-row
        class="ma-0 pa-0"
        style="width:100vw;top:100px"
      >
        <v-row
          class="ma-0 pa-0"
          style="height:25vh"
        ></v-row>
        <p
          class="mb-0 pa-0 parr d-none d-sm-flex"
          style="font-size:60px"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p
          class="mb-0 pa-0 parr d-sm-none"
          style="font-size:25px"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <v-row
          class="ma-0 pa-0"
          style="width:100vw;height:25vh"
        ></v-row>
        <v-row
          class="ma-0 pa-0"
          style="width:100vw"
        >
          <v-col
            class="ma-0 pa-0"
            cols="12"
            md="6"
            style="background-color:red"
          >
            <v-img
              style="max-height:50vh;min-height:50vh"
              src="prueba1.jpeg" eager/>
            <v-img
              style="max-height:50vh;min-height:50vh"
              src="prueba2.jpeg" eager/>
          </v-col>
          <v-col
            class="ma-0 pa-0"
            cols="12"
            md="6"
            style="background-color:red"
          >
            <v-img
              style="max-height:50vh;min-height:50vh"
              src="prueba3.jpeg" eager/>
            <v-img
              style="max-height:50vh;min-height:50vh"
              src="prueba4.jpeg" eager/>
          </v-col>
        </v-row>
      </v-row>

    </v-row>
    <v-row
      class="ma-0 pa-0 text-center titulo d-none d-md-flex"
      style="font-size:130px"
      justify="center"
    >
      Eladio Susaeta
    </v-row>
    <v-row
      class="ma-0 pa-0 text-center titulo d-md-none"
      style="font-size:60px"
      justify="center"
    >
      Eladio Susaeta
    </v-row>


  </v-app>
</template>

<script>


export default {

  name: 'App',
  data: () => ({
    items: [
      {
        src: 'prueba1.jpeg',
      },
      {
        src: 'prueba2.jpeg',
      },
      {
        src: 'prueba3.jpeg',
      },
      {
        src: 'prueba4.jpeg',
      },
    ]
  }),
  computed: {
      height () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 220
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 600
          case 'xl': return 800
        }
        return 1
      },
    }
};
</script>
