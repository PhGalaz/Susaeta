<template>
  <v-app
    style="background-color:transparent"
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
      >
        <v-carousel-item
          style="height:100vh; width:100vw"
          eager
          transition="my-carousel"


          v-for="(photo, index) in $store.state.cover" :key="`photo-${index}`"
        >


          <v-img :src="photo" height="100%" eager/>
        </v-carousel-item>

      </v-carousel>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="background-color:#EAEAEA;width:100vw;top:1000px"
    >
      <v-row
        class="ma-0 pa-0"
        style="width:100vw;height:100vh"
        align="center"
      >
        <p
          class="ma-0 mx-16 pa-0 px-16 parr d-none d-sm-flex"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p
          class="mb-0 pa-0 parr d-sm-none"
          style="font-size:25px"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      </v-row>
      <v-row
        class="ma-0 pa-0"
        style="width:100vw;background-color:#707070"
      >
        <v-col
          class="ma-0 pa-0"
          cols="12"
          md="6"
        >
          <v-row
            class="ma-0 pa-0"
            style="max-height:50vh;min-height:50vh"
          >
            <router-link
              :to="{ name: 'Workcase', params: {index: this.index0 } }"

            >
              <v-row
                class="ma-0 pa-0 casa"
                align="center"
              >
                <v-row
                  class="ma-0 pa-0 name"
                  style="width:100%"
                  justify="center"
                  align="center"
                >
                  {{ $store.state.projects[this.index0].name }}
                </v-row>
              </v-row>
            </router-link>


            <v-img
              style="max-height:50vh;min-height:50vh"
              :src="this.cabin0" :key="0" eager/>
          </v-row>
          <v-row
            class="ma-0 pa-0"
            style="max-height:50vh;min-height:50vh"
          >
            <router-link
              :to="{ name: 'Workcase', params: {index: this.index1 } }"
            >
              <v-row
                class="ma-0 pa-0 casa"
                align="center"
              >
                <v-row
                  class="ma-0 pa-0 name"
                  style="width:100%"
                  justify="center"
                  align="center"
                >
                  {{ $store.state.projects[this.index1].name }}
                </v-row>
              </v-row>
            </router-link>


            <v-img
              style="max-height:50vh;min-height:50vh"
              :src="this.cabin1" :key="1" eager/>
          </v-row>




        </v-col>
        <v-col
          class="ma-0 pa-0"
          cols="12"
          md="6"
        >
          <v-row
            class="ma-0 pa-0"
            style="max-height:50vh;min-height:50vh"
          >
            <router-link
              :to="{ name: 'Workcase', params: {index: this.index2 } }"
            >
              <v-row
                class="ma-0 pa-0 casa"
                align="center"
              >
                <v-row
                  class="ma-0 pa-0 name"
                  style="width:100%"
                  justify="center"
                  align="center"
                >
                  {{ $store.state.projects[this.index2].name }}
                </v-row>
              </v-row>
            </router-link>


            <v-img
              style="max-height:50vh;min-height:50vh"
              :src="this.cabin2" :key="2" eager/>
          </v-row>
          <v-row
            class="ma-0 pa-0"
            style="max-height:50vh;min-height:50vh"
          >
            <router-link
              :to="{ name: 'Workcase', params: {index: this.index3 } }"
            >
              <v-row
                class="ma-0 pa-0 casa"
                align="center"
              >
                <v-row
                  class="ma-0 pa-0 name"
                  style="width:100%"
                  justify="center"
                  align="center"
                >
                  {{ $store.state.projects[this.index3].name }}
                </v-row>
              </v-row>
            </router-link>


            <v-img
              style="max-height:50vh;min-height:50vh"
              :src="this.cabin3" :key="3" eager/>
          </v-row>
        </v-col>
      </v-row>
      <v-row
        class="ma-0 pa-0"
        justify="center"
        align="center"
        style="width:100%;max-height:40vh"
      >

        <v-img
          style="transform: scale(0.2);transform-origin: left top;left:40%;top:30%"
          src="rolfeichler.jpg" eager/>


      </v-row>
      <v-row
        class="ma-0 pa-0"
        style="width:100vw"
        align="center"
      >
        <v-col
          class="ma-0 mt-16 pa-0"
          cols="6"
          style=""
        >
          <v-img
            style=""
            src="arquitecto_eladio_susaeta.png" eager/>
        </v-col>
        <v-col
          class="mt-16"
          cols="6"
        >
          <p
            class="ma-5 ml-10 mr-16 pr-16 parr"
            style="font-size:35px"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </v-col>
      </v-row>
      <v-row
        class="ma-0 pa-0"
        style="width:100vw;height:70vh;background-color:#C1B7A8"
        align="center"
      >
        <v-col
          class="ma-0 pa-0"
          cols="6"
        >
          <p
            class="ma-16 pl-16 pr-16 parr"
            style="font-size:35px;font-size:65px;line-height:100%"
          >
            ¿Vamos por
          </p>
          <p
            class="ma-16 pl-16 pr-16 parr"
            style="font-size:35px;font-size:65px;line-height:100%;margin-left:100px !important;margin-top: -65px !important"
          >
            un buen café?
          </p>
        </v-col>
        <v-col
          class="ma-0 pa-0"
          cols="6"
        >
          <v-text-field
            class="ma-0 mt-8 mr-16 pr-16 pa-0 email"

            label="Email"
            color="#707070"
            outlined
            background-color="#EDEDED"
            style="color:blue"
            solo
            flat
          ></v-text-field>
          <v-textarea
            class="ma-0 mr-16 pr-16 pa-0"

            label="Comentario"
            no-resize
            outlined
            color="#707070"
            background-color="#EDEDED"
            solo
            rows="8"
            row-height="15"
            flat
          ></v-textarea>
          <v-row
            class="ma-0 mr-16 pa-0 pr-16"

            width="100%"
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="#707070"
            >
              Enviar
            </v-btn>
          </v-row>

        </v-col>
      </v-row>

    </v-row>
    <v-row
      class="ma-0 pa-0 text-center titulo d-none d-md-block"
      style="font-size:110px;transform:scale(0.5)"
      justify="center"
      eager
    >
      <v-img class="shadowed" src="Asset 4.png" eager/>
    </v-row>
    <v-row
      class="ma-0 pa-0 text-center titulo d-block d-md-none"
      style="font-size:80px"
      justify="center"
      eager
    >
      <v-img class="shadowed" style="transform:scale(0.7)" src="Asset 4.png" eager/>
    </v-row>


  </v-app>
</template>

<script>


export default {

  name: 'App',
  data: () => ({
    cabin0: null,
    cabin1: null,
    cabin2: null,
    cabin3: null,
    index0: null,
    index1: null,
    index2: null,
    index3: null,
    random_set: [],
    position: [1,2,3,4],
    index: 4,
    indexX: 4,
    indexY: 0,
    last: null
  }),
  beforeCreate(){

  },
  created(){
    window.scrollTo(0,0);
    this.$store.commit('header', true);
    for (var i = 0; i < this.$store.state.projects.length; i++){
      var pictures = this.$store.state.projects[i].pictures;
      pictures = pictures.sort(function() {return 0.5 - Math.random()});

      this.random_set.push([pictures, i])
    }
    this.random_set = this.random_set.sort(function() {return 0.5 - Math.random()});
    this.cabin0 = this.random_set[0][0][0];
    this.cabin1 = this.random_set[1][0][0];
    this.cabin2 = this.random_set[2][0][0];
    this.cabin3 = this.random_set[3][0][0];
    this.index0 = this.random_set[0][1];
    this.index1 = this.random_set[1][1];
    this.index2 = this.random_set[2][1];
    this.index3 = this.random_set[3][1];
    this.init();
  },

  methods: {

    async init() {
      if(this.position.length){
        var r = Math.floor( Math.random() * this.position.length );
        while(this.last == this.position[r]){
          r = Math.floor( Math.random() * this.position.length );
        }
        this.last = this.position[r];
        var photo = (this.indexY) % (this.random_set[this.indexX][0].length);
        if(this.position[r] == 1){
          this.cabin0 = this.random_set[this.indexX][0][photo];
          this.index0 = this.random_set[this.indexX][1];
        } else if (this.position[r] == 2) {
          this.cabin1 = this.random_set[this.indexX][0][photo];
          this.index1 = this.random_set[this.indexX][1];
        } else if (this.position[r] == 3) {
          this.cabin2 = this.random_set[this.indexX][0][photo];
          this.index2 = this.random_set[this.indexX][1];
        } else if (this.position[r] == 4) {
          this.cabin3 = this.random_set[this.indexX][0][photo];
          this.index3 = this.random_set[this.indexX][1];
        } else {
          console.log('Error')
        }
        this.position.splice(r, 1);
        this.index = this.index + 1;
        this.indexX = (this.index) % this.random_set.length;
        if ((this.index >= this.random_set.length) && (this.index) % this.random_set.length == 0){
          this.indexY = this.indexY + 1;
        }
        await this.random_sleep();
        this.init()
      } else {
        this.position = [1,2,3,4];
        this.init()
      }
    },

    random_sleep() {
      const randomlapse = Math.floor(Math.random() * 2000) + 3000;
      return new Promise((resolve) => {
        setTimeout(resolve, randomlapse);
      });
    }
  }
};
</script>

<style lang="sass">


  .theme--light.v-input:not(.v-input--is-disabled) input
    color: #707070 !important

  .v-text-field--outlined fieldset
    color: #707070 !important

  .v-text-field--outlined textarea
    color: #707070 !important




  .v-app input.v-textfield
    color: red
    font-family: Times !important



  .name
    font-size: 20px
    position: absolute
    opacity: 0


  .casa
    width: 50%
    height: 50vh
    position: absolute
    z-index: 10
    color: #EDEDED
    font-family: Montserrat
    font-weight: bold
    font-size: 25px
    &:hover
      cursor: pointer
      background-color: rgba(113,113,113,.55)
      .name
        opacity: 1


  .shadowed
    -webkit-filter: drop-shadow(5px 5px 5px #151515)
    filter: drop-shadow(5px 5px 5px #151515)

  .fade-enter-active
  .fade-leave-active
    transition: opacity 2.5s

  .fade-enter
  .fade-leave-to
    opacity: 0

  .titulo
    position: absolute
    width: 100vw
    top: 10vh
    height: 150px
    color: #EDEDED
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
    cursor: default

  .parr
    font-size: 60px
    font-family: Vollkorn
    font: normal normal normal Vollkorn
    letter-spacing: 1px
    color: #707070
    line-height: 120%
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
