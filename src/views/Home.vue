<template>
  <v-app
    style="position:absolute;background-color:#707070;max-height:100vh;overflow-y:auto"
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
  components: {
    'Form': require('@/components/Form.vue').default,
    'Footer': require('@/components/Footer.vue').default
  },
  beforeCreate(){

  },
  created(){
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

  input
    color: #707070 !important
    font-family: Montserrat !important
    font-size: 20px !important

  .fotoEladio
    height: 200vh !important

  .fotoEladioSm
    height: 85vh !important

  .foto
    min-height: 100vh !important
    max-height: 100vh !important

  .fotoSm
    min-height: 85vh !important
    max-height: 85vh !important


  .name
    font-size: 20px
    position: absolute
    opacity: 0

  .nameMobile
    font-size: 30px
    position: absolute




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
      background-color: rgba(113,113,113,.4)
      .name
        opacity: 1
      .mobile
        color: red

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

  .mobileText
    font-size: 30px
    font-family: Vollkorn
    font: normal normal normal Vollkorn
    letter-spacing: 1px
    color: #707070
    line-height: 100%


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
