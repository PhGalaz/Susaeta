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
        :class="{ 'd-none': !isActive }"
        cols="2"
      >
        <p
          class="menu-item text-center"
        >
          <router-link
            to="/Work"
            class="text-decoration-none"
          ><span transition="scale-transition" @click="isActive = !isActive">Work</span></router-link></p>
      </v-col>
      <v-col
        :class="{ 'd-none': isActive }"
        cols="2"
      >
        <p
          class="menu-item text-center"
        >
          <router-link
            to="/"
            class="text-decoration-none"

          ><span @click="isActive = !isActive">Home</span></router-link></p>
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
    isActive: true
  }),
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
