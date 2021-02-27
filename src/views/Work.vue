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
        eager
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
      class="ma-0 pa-0 text-center titulo d-none d-md-flex"
      style="font-size:130px"
      justify="center"
    >
      Casa Riscos
    </v-row>


  </v-app>
</template>

<script>


export default {

  name: 'App',
  data: () => ({
    items: [
      {
        src: 'casariscos/casariscos3.jpg',
      },
      {
        src: 'casariscos/casariscos6.jpg',
      },
      {
        src: 'casariscos/casariscos7.jpg',
      },
      {
        src: 'casariscos/casariscos9.jpg',
      },
    ]
  })
};
</script>

<style lang="sass" scope>

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
    cursor: default

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
