<template>
  <v-app
    style="position:absolute;background-color:#707070;max-height:100vh;overflow-y:auto"
  >
    <v-row
      id="test"
      class="ma-0 pa-0"
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
          touchless
        >
          <v-carousel-item
            style="height:100vh; width:100vw"
            eager
            transition="my-carousel"


            v-for="(photo, index) in $store.state.cover" :key="`photo-${index}`"
          >


            <v-img :src="photo" height="100%" width="100%" eager/>
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
            class="ma-0 mx-16 pa-0 mobileText d-sm-none"
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
                  class="ma-0 pa-0 casa d-none d-sm-flex"
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
                <v-row
                  class="ma-0 pa-0 casa mobile d-sm-none"
                  align="center"
                  style="width:100vw"
                >
                  <v-row
                    class="ma-0 pa-0 nameMobile"
                    style="width:100%"
                    justify="center"
                    align="center"
                  >
                    {{ $store.state.projects[this.index0].name }}
                  </v-row>
                </v-row>
              </router-link>


              <v-img
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
                  class="ma-0 pa-0 casa d-none d-sm-flex"
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
                <v-row
                  class="ma-0 pa-0 casa mobile d-sm-none"
                  align="center"
                  style="width:100vw"
                >
                  <v-row
                    class="ma-0 pa-0 nameMobile"
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
                  class="ma-0 pa-0 casa d-none d-sm-flex"
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
                <v-row
                  class="ma-0 pa-0 casa mobile d-sm-none"
                  align="center"
                  style="width:100vw"
                >
                  <v-row
                    class="ma-0 pa-0 nameMobile"
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
                  class="ma-0 pa-0 casa d-none d-sm-flex"
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
                <v-row
                  class="ma-0 pa-0 casa mobile d-sm-none"
                  align="center"
                  style="width:100vw"
                >
                  <v-row
                    class="ma-0 pa-0 nameMobile"
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
          style="width:100vw"
        >
          <v-row
            class="ma-0 pa-0"
            style="width:100%;min-height:15vh;max-height:15vh"
          >
          </v-row>
          <v-row
            class="ma-0 pa-0"
            :class="{'fotoEladio': $vuetify.breakpoint.xs,
                      'fotoEladioSm': $vuetify.breakpoint.sm}"
            style="width:100%"
            align="center"
          >
            <v-col
              class="ma-0 pa-0"
              cols="12" sm="6"
            >
              <v-img
                class="ma-0 pa-0"
                :class="{'foto': $vuetify.breakpoint.xs,
                          'fotoSm': $vuetify.breakpoint.sm}"
                src="arquitecto_eladio_susaeta.png" eager/>
            </v-col>
            <v-col
              class="ma-0 pa-0"
              :class="{'foto': $vuetify.breakpoint.xs,
                        'fotoSm': $vuetify.breakpoint.sm}"
              cols="12" sm="6"
              style="width:100vw"
            >
              <p
                class="ma-0 mx-16 pa-0 pr-16 parr d-none d-sm-flex"
                style="font-size:40px !important"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <v-row
                class="ma-0 pa-0 d-sm-none"
                style="width:100vw;height:100vh"
                align="center"
              >
                <p
                  class="ma-0 mx-16 pa-0 mobileText"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

              </v-row>
            </v-col>
          </v-row>

        </v-row>
        <v-row
          class="ma-0 pa-0 d-none d-sm-flex"
          style="width:100vw;height:70vh;background-color:#C1B7A8"
        >
          <v-row
            class="ma-0 pa-0 parr"
            style="width:50vw;font-size:70px;line-height:100%"
            align="center"
          >
            <p class="ma-0 ml-16 pa-0 pl-16">¿Vamos por<br><span class="cafe">un buen café?</span></p>
          </v-row>
          <v-row
            class="ma-0 pa-0 parr"
            style="width:50vw;font-size:70px;line-height:100%"
            align="center"
          >
            <Form
              class="ma-0 mr-16 pa-0 pr-16"
            ></Form>
          </v-row>
        </v-row>
        <v-row
          class="ma-0 pa-0 d-sm-none"
          style="width:100vw;height:100vh;background-color:#C1B7A8"
          align="center"
        >
          <v-row
            class="ma-0 pa-0"
            style="width:100%"
            justify="center"
            align="center"
          >
            <p class="ma-0 mt-4 mx-16 pa-0 parrr text-center" style="font-size:50px;line-height:110%">¿Vamos por<br><span>un buen café?</span></p>
          </v-row>
          <v-row
            class="ma-0 pa-0"
            style="width:100%"
          >
            <Form
              class="ma-0 mx-8 pa-0"
            ></Form>
          </v-row>

        </v-row>
      </v-row>
      <v-row
        class="ma-0 pa-0 d-none d-sm-flex"
        style="width:100vw;background-color:#91816A;min-height:160px"
        align="center"
      >
        <v-row
          class="ma-0 pa-0"
        >
          <Footer class="ma-0 pa-0"></Footer>
        </v-row>
      </v-row>
      <v-row
        class="ma-0 pa-0 d-sm-none"
        style="min-height:190px;background-color:#91816A"
        align="center"
      >
        <v-row
          class="ma-0 pa-0"
        >
          <Footer class="ma-0 pa-0"></Footer>
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
  mounted () {

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
    border-radius: 0px !important

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

  .parrr
    font-size: 60px
    font-family: Vollkorn
    font: normal normal normal Vollkorn
    letter-spacing: 1px
    color: #707070

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
