<template>
  <v-app
    style="background-color:transparent"
  >
    <v-row
      class="ma-0 pa-0 d-none d-sm-flex"
      style="position:fixed;z-index:11;width:100vw;top:3vh"
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
        :class="{ 'd-none': !$store.state.isActive }"
        cols="2"
      >
        <p
          class="menu-item text-center"
        >
          <router-link
            to="/Work"
            class="text-decoration-none"
          ><span @click="$store.commit('header', false)">Work</span></router-link></p>

      </v-col>
      <v-col
        :class="{ 'd-none': $store.state.isActive }"
        cols="2"
      >
        <p
          class="menu-item text-center"
        >
          <router-link
            to="/"
            class="text-decoration-none"

          ><span @click="$store.commit('header', true)">Home</span></router-link></p>
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

    <v-row
      class="ma-0 pa-0"
      style="background-color:red;height:90px;z-index:1000;font-family:Montserrat"
    >
      <v-row
        class="ma-0 pa-0"
        style="width:100%;background-color:green"
      >
        <p style="width:100vw" class="mx-16 px-16 my-5 pie">Eladio Susaeta, arquitecto Universidad X<br>Puerto Varas, Región de Los Lagos, Chile<br>
        <span>

        </span>
        <v-icon
          class="mr-1 mb-1"
          x-small
          color= "#EDEDED"
        >
          mdi-copyright
        </v-icon>
        <span style="font-size:15px">2021</span><br>
        <span style="font-size:10px">developed by Salvador</span>
      </p>
      </v-row>
    </v-row>


  </v-app>
</template>

<script>


export default {

  name: 'App',
  data: () => ({
    isActive: true
  }),
  created () {
  }
};
</script>

<style lang="sass">

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Vollkorn:ital,wght@0,400;0,500;1,400;1,500&display=swap')

  body::-webkit-scrollbar
    display: none

  .v-application a
    color: #EDEDED !important

  .pie
    color: #EDEDED
    line-height: 115%

  .header
    top: 5%
    position: fixed
    left: 50%
    transform: translate(-50%, 0)

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
    text-shadow: 3px 3px 3px rgba(0,0,0,0.2)
  .menu-item span:hover
    cursor: pointer

</style>
