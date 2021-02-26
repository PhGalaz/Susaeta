<template>
  <v-app
    style="background-color:transparent"
  >
    <v-row
      class="ma-0 pa-0 d-none d-sm-flex"
      style="position:fixed;z-index:1;width:100vw"
      justify="center"
    >
      <v-col
        cols="5"
        style="background-color:transparent"
      >
        <p
          class="menu-item text-right"
        ><span>Instagram</span></p>
      </v-col>
      <v-col
        class=""
        cols="2"
        style="background-color:transparent"
      >
        <p
          class="menu-item text-center"
        ><span>Work</span></p>
      </v-col>
      <v-col
        class="d-none"
        cols="2"
        style="background-color:transparent"
      >
        <p
          class="menu-item text-center"
        ><span>Inicio</span></p>
      </v-col>
      <v-col
        cols="5"
        style="background-color:transparent"
      >
        <p
          class="menu-item text-left"
        ><span>Whatsapp</span></p>
      </v-col>

    </v-row>

    <v-row
      style="z-index:0"
      class="ma-0 pa-0"
    >
      <v-carousel
        style="height:100vh;width:100vw;position:absolute"
        hide-delimiters
        height="100vh"
        cycle
        show-arrows-on-hover
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
      style="position:absolute;background-color:#EDEDED;width:100vw;top:100%"
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
          style="font-size:35px"
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
            sm="6"
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
            sm="6"
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
      class="ma-0 pa-0 text-center titulo"
      justify="center"
    >
      Text
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

<style lang="sass">

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300&display=swap')
  @font-face
    font-family: "Hoefler Text"
    src: local("Hoefler Text")
    src: url('/fonts/FontsFree-Net-Hoefler-Text.tiff')
    src: url('/fonts/FontsFree-Net-Hoefler-Text.tiff') format("truetype")
    src: url('/fonts/FontsFree-Net-Hoefler-Text.tiff') format("embedded-opentype")
    src: url('/fonts/fontsfree-net-hoefler-text-webfont.woff2') format("woff2")
    src: url('/fonts/fontsfree-net-hoefler-text-webfont.woff') format("woff")
    src: url('/fonts/FontsFree-Net-Hoefler-Text.tiff') format("svg")

  body::-webkit-scrollbar
    display: none

  .v-carousel .v-window-item
    position: absolute
    top: 0
    width: 100%

  .my-carousel-enter-active

    transition: 2s ease
  .my-carousel-leave-active

    transition: 2s ease
  .my-carousel-move

    transition: transform 6s
  .my-carousel-enter

    transform: translate(100%, 0)
  .my-carousel-leave

  .my-carousel-leave-to
    position: absolute
    top: 0
    transform: translate(-100%, 0)

  .titulo
    position: absolute
    width: 100vw
    top: 15vh
    height: 150px
    font-family: 'Hoefler Text','Baskerville Old Face',Garamond,'Times New Roman',serif
    font-size: 130px
    font: normal normal normal Hoefler Text
    letter-spacing: 7px
    color: #707070
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none

  .parr
    margin-left: 15%
    margin-right: 15%
    font-family: 'Hoefler Text','Baskerville Old Face',Garamond,'Times New Roman',serif
    font: normal normal normal Hoefler Text
    color: #707070
    line-height: 110%
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none



  .header

    top: 5%
    position: fixed
    left: 50%
    transform: translate(-50%, 0)

  .v-btn
    font-family: Montserrat
    letter-spacing: 0px
    color: #707070


  .casos
    text-align: left
    font: normal normal medium Montserrat
    letter-spacing: 0px
    font-size: 40px
    color: #707070

  .casa
    background-color: transparent
    text-align: left
    font: normal normal medium Montserrat
    letter-spacing: 0px
    font-size: 30px
    color: #707070

  .title-text
    font-size: 120px
    font-family: Hoefler
  .title-text-mobile
    font-size: 80px
    font-family: Hoefler

  .menu-item
    font-family: Montserrat
    letter-spacing: 0px
    color: #707070
    font-size: 20px
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
  .menu-item span:hover
    cursor: pointer

</style>
