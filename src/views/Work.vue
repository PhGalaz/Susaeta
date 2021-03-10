<template>
  <v-app
    style="background-color:transparent"

  >
  <v-row
    class="ma-0 pa-0"
    align="center"
  >
    <v-row
      style="z-index:0"
      class="ma-0 pa-0"
    >
      <v-carousel
        style="height:100vh;width:100vw"
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
  </v-row>
  <v-row
    class="ma-0 pa-0"
    style="heigth:100px;background-color:blue"
  >
  </v-row>





  </v-app>
</template>

<script>


export default {

  name: 'App',
  data: () => ({
    items: [
      {
        src: 'casariscos3.jpg',
      },
      {
        src: 'casariscos6.jpg',
      },
      {
        src: 'casariscos7.jpg',
      },
      {
        src: 'casariscos9.jpg',
      },
      {
        src: 'casabosquina.jpg',
      },
    ]
  }),
  created(){
    this.$store.commit('header', false)
  }
};
</script>

<style lang="sass" scope>

  h1
    font-size: 45px
    font-family: Montserrat
    letter-spacing: 2px
    color: #EDEDED
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
    cursor: default

  h3
    font-size: 300px
    font-family: Montserrat
    letter-spacing: 2px
    color: #EDEDED
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
    cursor: default

  .negro
    background-color: black

  .ciudad
    position: absolute
    width: 100vw


    font-family: Montserrat
    letter-spacing: 2px
    color: #EDEDED
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
    cursor: default

  .nombre
    position: absolute
    width: 100vw


    font-family: Montserrat
    letter-spacing: 2px
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
