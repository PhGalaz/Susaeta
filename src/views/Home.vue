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
        class="ma-16 pa-16"
        style="width:100vw"
      >
        <p
          class="mb-0 pa-0 parr d-none d-sm-flex"
          style="font-size:60px"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p
          class="mb-0 pa-0 parr d-sm-none"
          style="font-size:25px"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      </v-row>
      <v-row
        class="ma-0 pa-0"
        style="width:100vw"
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
              :to="{ name: 'Workcase', params: {name: this.name0 } }"
            >
              <v-row
                class="ma-0 pa-0 casa"
              >
                <v-row
                  class="ma-0 pa-0 name"
                >
                  {{ this.name0 }}
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
              :to="{ name: 'Workcase', params: {name: this.name1 } }"
            >
              <v-row
                class="ma-0 pa-0 casa"
              >
                <v-row
                  class="ma-0 pa-0 name"
                >
                  {{ this.name1 }}
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
              :to="{ name: 'Workcase', params: {name: this.name2 } }"
            >
              <v-row
                class="ma-0 pa-0 casa"
              >
                <v-row
                  class="ma-0 pa-0 name"
                >
                  {{ this.name2 }}
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
              :to="{ name: 'Workcase', params: {name: this.name3 } }"
            >
              <v-row
                class="ma-0 pa-0 casa"
              >
                <v-row
                  class="ma-0 pa-0 name"
                >
                  {{ this.name3 }}
                </v-row>
              </v-row>
            </router-link>


            <v-img
              style="max-height:50vh;min-height:50vh"
              :src="this.cabin3" :key="3" eager/>
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
    show: true,
    cabin0: null,
    cabin1: null,
    cabin2: null,
    cabin3: null,
    name0: null,
    name1: null,
    name2: null,
    name3: null,
    random_set: [],
    position: [1,2,3,4],
    index: 4,
    index2: 0,
    last: null
  }),
  beforeCreate(){

  },
  created(){
    this.$store.commit('header', true);
    for (var i = 0; i < this.$store.state.projects.length; i++){
      var pictures = this.$store.state.projects[i].pictures;
      var name = this.$store.state.projects[i].name;
      pictures = pictures.sort(function() {return 0.5 - Math.random()});

      this.random_set.push([pictures, name])
    }
    this.random_set = this.random_set.sort(function() {return 0.5 - Math.random()});
    this.cabin0 = this.random_set[0][0][0];
    this.name0 = this.random_set[0][1];
    this.cabin1 = this.random_set[1][0][0];
    this.name1 = this.random_set[1][1];
    this.cabin2 = this.random_set[2][0][0];
    this.name2 = this.random_set[2][1];
    this.cabin3 = this.random_set[3][0][0];
    this.name3 = this.random_set[3][1];
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
        var photo = (this.index2) % (this.random_set[this.index].length);
        if(this.position[r] == 1){
          this.cabin0 = this.random_set[this.index][0][photo];
          this.name0 = this.random_set[this.index][1];
        } else if (this.position[r] == 2) {
          this.cabin1 = this.random_set[this.index][0][photo];
          this.name1 = this.random_set[this.index][1];
        } else if (this.position[r] == 3) {
          this.cabin2 = this.random_set[this.index][0][photo];
          this.name2 = this.random_set[this.index][1];
        } else if (this.position[r] == 4) {
          this.cabin3 = this.random_set[this.index][0][photo];
          this.name3 = this.random_set[this.index][1];
        } else {
          console.log('Error')
        }
        this.position.splice(r, 1);
        this.index = (this.index + 1) % this.random_set.length;
        if (this.index == 0){
          this.index2 = this.index2 + 1;
        }
        await this.random_sleep();
        this.show = !this.show;
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

  .name
    font-size: 20px
    position: absolute
    bottom: 30px
    left: 40px

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
      background-color: rgba(0,0,0,.1)


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
    font-family: Vollkorn
    font: normal normal normal Vollkorn
    letter-spacing: 1px
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
