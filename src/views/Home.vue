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
          >
            <v-img
              style="max-height:50vh;min-height:50vh"
              src="prueba1.jpeg" eager/>
            <v-img
              style="max-height:50vh;min-height:50vh"
              src="casaplayina.jpg" eager/>
          </v-col>
          <v-col
            class="ma-0 pa-0"
            cols="12"
            md="6"
          >
            <v-img
              style="max-height:50vh;min-height:50vh"
              src="casamarina.jpg" eager/>
            <v-img
              style="max-height:50vh;min-height:50vh"
              src="casabosquina.jpg" eager/>
          </v-col>
        </v-row>
      </v-row>

    </v-row>
    <v-row
      class="ma-0 pa-0 text-center titulo d-none d-md-block"
      style="font-size:110px;transform:scale(0.5)"
      justify="center"
      eager
    >
    <v-img src="arquitectosusaeta.png" eager/>
    </v-row>
    <v-row
      class="ma-0 pa-0 text-center titulo d-block d-md-none"
      style="font-size:80px"
      justify="center"
      eager
    >
      <v-img style="transform:scale(0.7)" src="arquitectosusaeta.png" eager/>
    </v-row>


  </v-app>
</template>

<script>


export default {

  name: 'App',
  data: () => ({
    items: [
      {
        src: 'casabosquina.jpg',
      },
      {
        src: 'casaplayina.jpg',
      },
      {
        src: 'casamarina.jpg',
      },
    ]
  }),
  created(){
    this.$store.commit('header', true)
  }
};
</script>

<style lang="sass">
  .titulo
    position: absolute
    width: 100vw
    top: 10vh
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
    cursor: default

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
</style>
