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

          v-for="project in $store.state.projects" :key="project.id"
        >
          <v-img :src="project.pictures[0]" height="100%" eager/>
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
              :src="this.cabin0" eager/>
            <v-img
              style="max-height:50vh;min-height:50vh"
              :src="this.cabin1" eager/>
          </v-col>
          <v-col
            class="ma-0 pa-0"
            cols="12"
            md="6"
          >
            <v-img
              style="max-height:50vh;min-height:50vh"
              :src="this.cabin2" eager/>
            <v-img
              style="max-height:50vh;min-height:50vh"
              :src="this.cabin3" eager/>
            {{  }}
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
    cabin0: null,
    cabin1: null,
    cabin2: null,
    cabin3: null,
    random_set: [],
    position: [1,2,3,4],
    index: 4,
    index2: 0
  }),
  beforeCreate(){

  },
  created(){
    this.$store.commit('header', true);
  },
  mounted: function () {
    for (var i = 0; i < this.$store.state.projects.length; i++){
      var pictures = this.$store.state.projects[i].pictures;
      pictures = pictures.sort(function() {return 0.5 - Math.random()});

      this.random_set.push(pictures)
    }
    this.random_set = this.random_set.sort(function() {return 0.5 - Math.random()});
    this.display();
  },
  methods: {

    async init() {
      if(this.position.length){
        console.log(this.position);
        var r = Math.floor( Math.random() * this.position.length );
        var photo = (this.index2) % this.random_set[this.index].length;
        console.log(this.position.length);
        console.log(r);
        console.log(this.position[r]);
        if(this.position[r] == 1){
          this.cabin0 = this.random_set[this.index][photo];
        } else if (this.position[r] == 2) {
          this.cabin1 = this.random_set[this.index][photo];
        } else if (this.position[r] == 3) {
          this.cabin2 = this.random_set[this.index][photo];
        } else if (this.position[r] == 4) {
          this.cabin3 = this.random_set[this.index][photo];
        } else {
          console.log('Error')
        }
        this.position.splice(r, 1);
        this.index = (this.index + 1) % 4;
        await this.random_sleep();
        this.init()
      } else {
        console.log('else');
        this.index2 = this.index2 + 1;
        this.position = [1,2,3,4];
        this.init()
      }
    },

    random_sleep() {
      const seconds = [2000,3000,4000,5000,6000];
      const randomlapse = Math.floor(Math.random() * seconds.length);
      return new Promise((resolve) => {
        setTimeout(resolve, seconds[randomlapse]);
      });
    },


   display(){
     this.cabin0 = this.random_set[0][0];
     this.cabin1 = this.random_set[1][0];
     this.cabin2 = this.random_set[2][0];
     this.cabin3 = this.random_set[3][0];
     this.init();
   }
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
