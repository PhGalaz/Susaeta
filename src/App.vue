<template>
  <v-app
    v-cloak
  >
    <!-- Navegation drawer mobile only -->
    <v-row
      class="ma-0 pa-0 d-sm-none"
      style="width:100vw;height:100vh"
    >
      <v-app-bar
        class="ma-0 pa-0"
        style="position:fixed;background-color:transparent;z-index:1000;width:100vh"
        flat
      >
        <v-spacer></v-spacer>
        <transition
          name="fade"
        >
        <v-app-bar-nav-icon style="transition: fade 4s ease" :class="{ 'd-none': this.$store.state.burger }" class="mt-5" color="#EDEDED" @click="drawer = true"></v-app-bar-nav-icon>
      </transition>
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
          style="background-color:#707070;width:100vw;position:absolute;opacity:0.3"
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
                style="width:100vw;height:8vh;font-size:15px"
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
                style="width:100vw;height:8vh;font-size:15px"
                align="center"
                @click="ajust()"
              >
                <p class="ma-0 mt-5 pa-0"><span>Home</span></p>
              </router-link>
            </v-row>


            <v-row
              class="ma-0 pa-0 menu-item mobile"
              style="height:8vh"
              @click="myFunction()"
              align="center"
            >
              <v-spacer></v-spacer>
              <a
                class="ma-0 mt-5 pa-0"
                style="font-size:15px;color:#EDEDED !important;height:100%"
                align="center"
              >Instagram</a>
              <v-spacer></v-spacer>
            </v-row>

            <v-row
              class="ma-0 pa-0 menu-item mobile"
              style="height:8vh !important"
              @click="myFunction()"
            >
              <v-spacer></v-spacer>
              <a
                class="ma-0 mt-5 pa-0"
                style="font-size:15px;color:#EDEDED !important"
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
          ><span @click="ajust()">Home</span></router-link></p>
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

    <transition
        :name="transitionName"
    >
      <router-view/>
    </transition>


  </v-app>
</template>

<script>

const DEFAULT_TRANSITION = 'fade';

export default {

  name: 'App',
  data: () => ({
    isActive: true,
    drawer: false,
    group: null,
    transitionName: DEFAULT_TRANSITION
  }),
  created () {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === 'slide') {
        const toDepth = to.path.length;
        const fromDepth = from.path.length;
        transitionName = toDepth > fromDepth ? 'router' : 'router-left';
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION;

      next();
    });
  },
  methods: {
    myFunction: function () {
      window.open("https://www.instagram.com/eladio_susaeta/?hl=en", "_blank");
    },
    ajust: function () {
      this.$store.commit('header', true);
      this.$store.commit('scrolling', 0)
    }
  }
};
</script>

<style lang="sass">

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Vollkorn:ital,wght@0,400;0,500;1,400;1,500&display=swap')

  ::-webkit-scrollbar
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
    text-shadow: 3px 3px 3px rgba(113,113,113,.2)
  .menu-item span:hover
    cursor: pointer
  .menu-item .mobile :hover
    cursor: pointer

  .mobile :hover
    cursor: pointer



  .router-enter-active
    animation: router-out 1s ease-in

  .router-leave-active
    animation: router-in 1s reverse ease-out

  @keyframes router-in
    0%
      transform: translate(-100%, 0)

    100%
      transform: translate(0, 0)

  @keyframes router-out
    0%
      transform: translate(100%, 0)

    100%
      transform: translate(0, 0)


  .router-left-enter-active
    animation: router-left-out 1s ease-in

  .router-left-leave-active
    animation: router-left-in 1s reverse  ease-out

  @keyframes router-left-in
    0%
      transform: translate(100%, 0)

    100%
      transform: translate(0, 0)

  @keyframes router-left-out
    0%
      transform: translate(-100%, 0)

    100%
      transform: translate(0, 0)


</style>
