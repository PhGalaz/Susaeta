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
        class="menu-item text-right"
      >
        <a
          class="text-decoration-none"
          href="https://www.instagram.com/eladio_susaeta/?hl=en"
        >Instagram</a>
      </v-col>
      <v-col
        cols="2"
        style="background-color:transparent"
      >
        <p
          class="menu-item text-center"
        >
          <router-link
            to="/Work"
            class="text-decoration-none"
          >Work</router-link></p>
      </v-col>
      <v-col
        class="d-none"
        cols="2"
        style="background-color:transparent"
      >
        <router-link
          to="/"
          class="menu-item text-center"
        ><span>Home</span></router-link>
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

    <router-view></router-view>


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
    src: url('/fonts/FontsFree-Net-Hoefler-Text.tff')
    src: url('/fonts/FontsFree-Net-Hoefler-Text.tff') format("truetype")
    src: url('/fonts/fontsfree-net-hoefler-text-webfont.eot') format("embedded-opentype")
    src: url('/fonts/fontsfree-net-hoefler-text-webfont.woff2') format("woff2")
    src: url('/fonts/fontsfree-net-hoefler-text-webfont.woff') format("woff")
    src: url('/fonts/fontsfree-net-hoefler-text-webfont.svg') format("svg")

  body::-webkit-scrollbar
    display: none

  .v-application a
    color: #EDEDED !important


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
    font: normal normal normal Hoefler Text
    letter-spacing: 7px
    color: #EDEDED
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
    font-size: 20px
    font-weight: bold
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    color: #EDEDED
    text-shadow: 0px 3px 6px #00000029
  .menu-item span:hover
    cursor: pointer

</style>
