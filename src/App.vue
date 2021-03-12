<template>
  <v-app
    style="background-color:transparent"
  >
    <v-row
      class="ma-0 pa-0 d-sm-none"
      style="width:100vh"
    >
      <v-app-bar
        class="ma-0 pa-0"
        style="position:fixed;background-color:transparent;z-index:1000;width:100vh"
        flat

      >
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon class="mt-5" color="#EDEDED" @click="drawer = true"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>

      </v-app-bar>
        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          bottom
        >
          <v-list
            nav
            dense
          >
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Account</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
    </v-row>

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
          @click="myFunction()"
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
      class="ma-0 pa-0 d-none d-sm-flex"
      style="width:100vw;background-color:#91816A;height:100px"
      align="center"
    >
      <Footer class="ma-0 mx-16 pa-0 px-16"></Footer>
    </v-row>
    <v-row
      class="ma-0 pa-0 d-sm-none"
      style="width:100vw;background-color:#91816A;height:100px"
      align="center"
    >
      <Footer class="ma-0 mx-5 pa-0" style="transform:scale(0.8);transform-origen:left"></Footer>
    </v-row>


  </v-app>
</template>

<script>


export default {

  name: 'App',
  data: () => ({
    isActive: true,
    drawer: false,
    group: null
  }),
  components: {
    'Footer': require('@/components/Footer.vue').default
  },
  created () {
  },
  methods: {
    myFunction: function () {
      window.open("https://www.instagram.com/eladio_susaeta/?hl=en", "_blank");
    }
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

  .v-application
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none

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
    color: #EDEDED
    text-shadow: 3px 3px 3px rgba(0,0,0,0.2)
  .menu-item span:hover
    cursor: pointer

</style>
