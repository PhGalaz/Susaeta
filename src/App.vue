<template>
  <v-app
    style="background-color:transparent"
  >
      <v-row
        style="z-index:1"
        class="header"
      >
        <v-col
          style="width:200px"
        >
          <v-row
            justify="center"
            align="center"
          >
            <v-btn
              style="text-transform: none;font-size:20px"
              text
              color="#707070"
            >
              Instagram
            </v-btn>
          </v-row>
        </v-col>
        <v-col
          style="width:200px"
        >
          <v-row
            justify="center"
            align="center"
          >
            <v-btn
              style="text-transform: none;font-size:20px"
              text
              color="#707070"
            >
              Work
            </v-btn>
          </v-row>
        </v-col>
        <v-col
          style="width:200px"
        >
          <v-row
            justify="center"
            align="center"
          >
            <v-btn
              style="text-transform: none;font-size:20px"
              text
              color="#707070"
            >
              Contact
            </v-btn>
          </v-row>
        </v-col>


      </v-row>

    <v-row
      style="z-index:0"
      class="ma-0 pa-0"
    >

        <v-carousel
          style="height:100vh; width:100vw; position: absolute"
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
        <v-row
          style="position:absolute;top:120vh"
        >
          <v-row
            style="width:15%"
          >
          </v-row>
          <v-row
            style="width:70%"
          >
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </h2>
            <v-row
              style="height:20vh;width:100vw"
            >

            </v-row>
            <v-row
              class="ma-0 pa-0"
              style="height:20vh"
              align="center"
            >
              <p
                class="casos"
                style="width:372px"
              >CASOS DE ESTUDIO</p>
            </v-row>
            <v-row
              style="height:5vh;width:100vw"
            >

            </v-row>

          </v-row>
          <v-row
            class="ma-0 pa-0"
            style="width:15%"
          >
          </v-row>
          <v-row
            style="height:100; width:100"
            eager
            class="ma-0 pa-0"
            no-gutters
          >

            <v-col
              cols="sm-6"
            >
              <v-img src="prueba1.jpeg"  eager/>
            </v-col>
            <v-col
              cols="sm-6"
            >
              <v-img src="prueba2.jpeg"  eager/>
            </v-col>
          </v-row>




        </v-row>



    </v-row>


    <v-row
      justify="center"
    >

      <p
        class="titulo text-center"
        justify="center"
      >Eladio Susaeta
      </p>
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
    ],
  }),
};
</script>

<style lang="sass" scope>

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300&display=swap')

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
    top: 15vh
    height: 150px
    font: normal normal normal 120px Hoefler Text
    letter-spacing: 10px
    color: #707070
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

  h2
    text-align: left
    font: normal normal normal 60px Hoefler Text
    letter-spacing: 3px
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



</style>
