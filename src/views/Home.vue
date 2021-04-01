<template>
  <v-app

    style="position:absolute;background-color:#EDEDED;max-height:100vh;max-width:100vw;overflow-y:auto"
  >
    <v-row

      class="ma-0 pa-0 scr"
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
          interval=5500
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
        class="ma-0 pa-0 yeah"
        style="background-color:#EAEAEA;width:100vw;top:1000px;min-height:100vh"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100vw;min-height:100vh"
          align="center"
        >
          <p
            class="ma-0 mt-16 pt-16 mb-16 pb-16 mx-16 pa-0 px-16 parr d-none d-sm-flex"
            style="font-size:40px !important"
          >{{$store.state.text1}}<br><br>{{$store.state.text2}}</p>
          <p
            class="ma-0 mt-16 py-16 mb-16 mx-10 pa-0 mobileText d-sm-none text-left"
          >{{$store.state.text1}}<br><br>{{$store.state.text2}}</p>

        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="width:100vw;background-color:#EDEDED"
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

                <v-row
                  class="ma-0 pa-0 casa d-none d-md-flex"
                  align="center"
                  @click="router(index0)"
                  @mouseover="ober(1)"
                  @mouseleave="leave()"
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
                  class="ma-0 pa-0 casa mobile d-md-none"
                  @click="router(index0)"
                  align="center"
                  style="width:100vw"
                >
                  <v-row
                    class="ma-0 pa-0 nameMobile text-center"
                    style="width:100%"
                    justify="center"
                    align="center"
                  >
                    {{ $store.state.projects[this.index0].name }}
                  </v-row>
                </v-row>



              <v-row
                class="ma-0 pa-0"
                style="max-height:50vh;min-height:50vh;max-width:100vw;overflow-x:hidden"
              >
                <v-lazy-image
                  :class="{'mob': $vuetify.breakpoint.xs}"

                  style="height:50vh;width:100%"
                  :src="this.cabin0" :key="0"
                />
              </v-row>
            </v-row>
            <v-row
              class="ma-0 pa-0"
              style="max-height:50vh;min-height:50vh"
            >
                <v-row
                  class="ma-0 pa-0 casa d-none d-md-flex"
                  align="center"
                  @click="router(index1)"
                  @mouseover="ober(2)"
                  @mouseleave="leave()"
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
                  class="ma-0 pa-0 casa mobile d-md-none"
                  @click="router(index1)"
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


              <v-row
                class="ma-0 pa-0"
                style="max-height:50vh;min-height:50vh;max-width:100vw;overflow-x:hidden"
              >
                <v-lazy-image
                  class=""
                  :class="{'mob': $vuetify.breakpoint.xs}"

                  style="height:50vh;width:100%"
                  :src="this.cabin1" :key="1" eager
                />
              </v-row>
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
                <v-row
                  class="ma-0 pa-0 casa d-none d-md-flex"
                  align="center"
                  @click="router(index2)"
                  @mouseover="ober(3)"
                  @mouseleave="leave()"
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
                  class="ma-0 pa-0 casa mobile d-md-none"
                  @click="router(index2)"
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


              <v-row
                class="ma-0 pa-0"
                style="max-height:50vh;min-height:50vh;max-width:100vw;overflow-x:hidden"
              >
                <v-lazy-image
                  :class="{'mob': $vuetify.breakpoint.xs}"

                  style="height:50vh;width:100%"
                  :src="this.cabin2" :key="2" eager
                />
              </v-row>
            </v-row>
            <v-row
              class="ma-0 pa-0"
              style="max-height:50vh;min-height:50vh"
            >
                <v-row
                  class="ma-0 pa-0 casa d-none d-md-flex"
                  align="center"
                  @click="router(index3)"
                  @mouseover="ober(4)"
                  @mouseleave="leave()"
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
                  class="ma-0 pa-0 casa mobile d-md-none"
                  @click="router(index3)"
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

              <v-row
                class="ma-0 pa-0"
                style="max-height:50vh;min-height:50vh;max-width:100vw;overflow-x:hidden"
              >
                <v-lazy-image
                  :class="{'mob': $vuetify.breakpoint.xs}"
                  style="height:50vh;width:100%"
                  :src="this.cabin3" :key="3" eager
                />
              </v-row>



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
                class="ma-0 mx-16 pa-0 pr-16 parr d-none d-sm-flex text-left"
                style="font-size:40px !important"
              >
                {{ $store.state.text3 }}<br><br>E.S.
              </p>
              <v-row
                class="ma-0 pa-0 d-sm-none text-left"
                style="width:100vw;height:100vh"
                align="center"
              >
                <p
                  class="ma-0 mt-16 pt-16 mb-16 pb-16 mx-10 pa-0 mobileText"
                >{{ $store.state.text3 }}<br><br>E.S.</p>

              </v-row>
            </v-col>
          </v-row>

        </v-row>
        <v-row
          class="ma-0 pa-0 d-none d-sm-flex parr text-center"
          style="width:100vw;background-color:#C1B7A8;font-size:70px;line-height:70%;color:#EDEDED"
          justify="center"
        >
            <p class="ma-0 mt-16 pt-8 pa-0" style="width:100vw">¡Conversemos!


            <br><br> <a href="tel:+56994998436" class="ma-0 pa-0 font-weight-medium" style="width:100vw;font-size:90px;text-decoration:none">+56 9 9499 8436</a></p>
            <v-row
              class="ma-0 mt-16 pa-0"
              style="font-family:Montserrat;width:100%;height:130px"
            >




              <v-row
                class="ma-0 mx-sm-16 pa-0 px-sm-16 d-none d-sm-flex text-left"
                align="center"
              >
                <v-row
                  class="ma-0 pa-0"
                  align="center"
                >
                  <p class="ma-0 mt-2 pa-0 pie" style="line-height:130%;font-family:Montserrat;font-size:17px;letter-spacing:0px;color:#707070">Arquitecto Eladio Susaeta, Chile<br>
                    <v-icon
                      class="mr-1 mt-1 mb-1"
                      small
                      color= "#707070"
                    >
                      mdi-copyright
                    </v-icon>
                    <span style="font-size:15px">{{ new Date().getFullYear() }}</span><br>
                    <span style="font-size:10px">developed by <a
                      class="ma-0 pa-0 agency"
                      style="font-size:10px;color:#EDEDED !important"
                      @click="Salvador()"
                    >pink dog</a></span>
                  </p>
                </v-row>
                <v-row
                  class="ma-0 pa-0"
                  style="width:100px"
                  justify="end"
                  align="center"
                >

                  <v-img style="filter: invert(43%) sepia(0%) saturate(7495%) hue-rotate(145deg) brightness(97%) contrast(81%)" max-height="100px" max-width="100px" src="timbre-ESsmall.png"/>
                </v-row>

              </v-row>

            </v-row>
          <v-row
            class="ma-0 pa-0 parr"
            style="width:50vw;font-size:70px;line-height:100%"
            align="center"
          >
            <!-- <Form
              class="ma-0 mr-16 pa-0 pr-16"
            ></Form> -->

          </v-row>
        </v-row>
        <v-row
          class="ma-0 pa-0 d-sm-none"
          style="width:100vw;height:60vh;background-color:#C1B7A8"
          align="center"
        >
          <v-row
            class="ma-0 pa-0"
            style="width:100%"
            justify="center"
            align="center"
          >
            <p class="ma-0 mt-8 mx-16 pa-0 parrr text-center" style="font-size:40px;line-height:110%;color:#EDEDED">¡Conversemos!
            <br><br> <a href="tel:+56994998436" class="ma-0 pa-0 font-weight-medium" style="width:100vw;font-size:60px;text-decoration:none">+56 9 9499 8436</a></p>
            <v-row
              class="ma-0 mt-16 pa-0"
              style="font-family:Montserrat;width:100%;height:130px"
            >



              <v-row
                class="ma-0 pa-0 d-sm-none"
                justify="center"
              >
                <v-img style="filter: invert(43%) sepia(0%) saturate(7495%) hue-rotate(145deg) brightness(97%) contrast(81%)" class="ma-0 mt-2 pa-0" max-height="70px" max-width="70px" src="timbre-ESsmall.png"/>
                <p class="ma-0 mt-3 pa-0 pie text-center" style="width:100vw;font-size:15px;color:#707070">Arquitecto Eladio Susaeta, Chile<br>
                  <v-icon
                    class="mt-1 mr-1 mb-1"
                    small
                    color= "#707070"
                  >
                    mdi-copyright
                  </v-icon>
                  <span style="font-size:15px">{{ new Date().getFullYear() }}</span><br>
                  <span style="font-size:10px">developed by
                    <a
                      class="ma-0 pa-0 agency"
                      style="font-size:10px;color:#EDEDED !important"
                      @click="Salvador()"
                    >pink dog</a>
                  </span>
                </p>
              </v-row>



            </v-row>
          </v-row>
          <v-row
            class="ma-0 pa-0"
            style="width:100%"
          >
          <!-- <Form
            class="ma-0 mx-8 pa-0"
          ></Form> -->

          </v-row>

        </v-row>
      </v-row>

      <v-row
        class="ma-0 pa-0 text-center titulo d-none d-md-block"
        style="font-size:110px;transform:scale(0.5)"
        justify="center"
        eager
      >
        <v-img class="shadowed" style="transform:scale(1.1)" src="Asset 4.png" eager/>
      </v-row>
      <v-row
        class="ma-0 pa-0 text-center titulo d-block d-md-none"
        style="font-size:80px"
        justify="center"
        eager
      >
        <v-img class="shadowed" style="transform:scale(0.6)" src="logomovil.png" eager/>
      </v-row>
    </v-row>
  </v-app>
</template>

<script>


export default {

  name: 'App',
  data: () => ({
    over: undefined,
    covers: null,
    cabin0: null,
    cabin1: null,
    cabin2: null,
    cabin3: null,
    index0: null,
    index1: null,
    index2: null,
    index3: null,
    random_set: [],
    random_set2: [],
    position: [1,2,3,4],
    index: 4,
    indexX: 4,
    indexY: 0,
    last: null,
    lastScrollPosition: 0,
    block: false
  }),
  components: {



  },

  created(){

    this.$store.commit('caseIndex', null);
    this.$store.commit('header', true);

    var covers = this.$store.state.cover;
    this.cover = covers.sort(function() {return 0.5 - Math.random()});

    for (var i = 0; i < this.$store.state.projects.length; i++){
      var pictures = this.$store.state.projects[i].display;
      var pictures2 = this.$store.state.projects[i].display2;
      pictures = pictures.sort(function() {return 0.5 - Math.random()});
      pictures2 = pictures2.sort(function() {return 0.5 - Math.random()});

      this.random_set.push([pictures, i])
      this.random_set2.push([pictures2, i])
    }

    if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.md ) {
      this.random_set = this.random_set2.sort(function() {return 0.5 - Math.random()});
    } else {
      this.random_set = this.random_set.sort(function() {return 0.5 - Math.random()});
    }
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
    Salvador: function () {
      window.open("https://www.pinkdogstudio.com", "_blank");
    },
    router: function (number) {
      this.$store.commit('caseIndex', number);
      this.$store.commit('header', false)
      this.$store.commit( 'scrolling', this.$el.pageYOffset || this.$el.scrollTop )
      this.$router.push({ name: 'Workcase' })
    },
    ober: function (number) {
      this.over = number
    },
    leave: function () {
      this.over = undefined
    },
    async init() {
      if(this.position.length){
        var r = Math.floor( Math.random() * this.position.length );
        while(this.last == this.position[r]){
          r = Math.floor( Math.random() * this.position.length );
        }
        this.last = this.position[r];
        var photo = (this.indexY) % (this.random_set[this.indexX][0].length);
        if (this.last != this.over) {
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
          this.index = this.index + 1;
          this.indexX = (this.index) % this.random_set.length;
          if ((this.index >= this.random_set.length) && (this.index) % this.random_set.length == 0){
            this.indexY = this.indexY + 1;
          }
          await this.random_sleep();
        }
        this.position.splice(r, 1);
        this.init()
      } else {
        this.position = [1,2,3,4];
        this.init()
      }
    },
    sleep(sec) {
      return new Promise((resolve) => {
        setTimeout(resolve, sec);
      });
    },

    random_sleep() {
      const randomlapse = Math.floor(Math.random() * 2000) + 3000;
      return new Promise((resolve) => {
        setTimeout(resolve, randomlapse);
      });
    },
  }
};
</script>

<style lang="sass">

  .agency:hover
    cursor: pointer
  .pie
    color: #EDEDED
    line-height: 140%

  .v-lazy-image
    filter: blur(5px)
    transition: filter .7s

  .v-lazy-image-loaded
    filter: blur(0)


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
    font-size: 25px
    position: absolute

  .mob
    width: 50vw




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
    font-size: 25px
    font-family: Vollkorn
    font: normal normal normal Vollkorn
    letter-spacing: 1px
    color: #707070
    line-height: 120%


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
