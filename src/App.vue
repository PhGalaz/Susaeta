<template>
  <v-app
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
        style="z-index:1000;height:24vh;background-color:transparent"
        fixed
        temporary
        bottom
        flat
      >
        <v-row
          class="ma-0 pa-0"
          style="background-color:#707070;width:100vw;height:24vh;position:absolute;opacity:0.3"
        >

        </v-row>
        <v-list
          class="ma-0 pa-0"
          nav
          dense
        >
          <v-list-item-group
            class="ma-0 pa-0"
            v-model="group"
            active-class=""
          >
            <v-row
              class="ma-0 pa-0 menu-item"
              :class="{ 'd-none': !$store.state.isActive }"
              style="height:8vh"
              align="center"
            >
              <router-link
                to="/Work"
                class="ma-0 pa-0 menu-item text-center text-decoration-none"
                style="width:100vw;height:8vh"
                align="center"
                @click="$store.commit('header', false)"
              >
                <p class="ma-0 mt-6 pa-0"><span>Work</span></p>
              </router-link>
            </v-row>
            <v-row
              class="ma-0 pa-0 menu-item"
              :class="{ 'd-none': $store.state.isActive }"
              style="height:8vh"
              align="center"
            >
              <router-link
                to="/"
                class="ma-0 pa-0 menu-item text-center text-decoration-none"
                style="width:100vw;height:8vh"
                align="center"
                @click="$store.commit('header', true)"
              >
                <p class="ma-0 mt-6 pa-0"><span>Home</span></p>
              </router-link>
            </v-row>


            <v-row
              class="ma-0 pa-0 menu-item mobile"
              style="height:8vh"
              @click="myFunction()"
            >
              <v-spacer></v-spacer>
              <a
                class="ma-0 mt-5 pa-0"
                style="font-size:20px;color:#EDEDED !important"
              >Instagram</a>
              <v-spacer></v-spacer>

            </v-row>

            <v-row
              class="ma-0 pa-0 menu-item mobile"
              style="height:8vh"
              @click="myFunction()"
            >
              <v-spacer></v-spacer>
              <a
                class="ma-0 mt-5 pa-0"
                style="font-size:20px;color:#EDEDED !important"
              >Whatsapp</a>
              <v-spacer></v-spacer>
            </v-row>
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
  .menu-item .mobile :hover
    cursor: pointer

  .mobile :hover
    cursor: pointer

</style>
