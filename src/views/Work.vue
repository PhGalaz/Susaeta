<template>

  <v-row
    class="ma-0 pa-0"
    style="position:absolute;background-color:#EDEDED;height:100vh;overflow-y:auto"
    @wheel="handleWheel()"

  >
  <v-touch @swipeup="onSwipeUp" @swipedown="onSwipeDown">
    <v-carousel
      style="width:100vw"
      height="100vh"
      hide-delimiters
      :show-arrows="false"
      continuos
      :vertical="true"
      :reverse="this.reverse"
      touchless
      v-model="this.model"
    >
      <v-carousel-item
        style="height:100vh; width:100vw"
        eager
        transition="my-carousel-vertical"
        reverse-transition="my-carousel-vertical-reverse"
        v-for="(item, index) in $store.state.projects" :key="index"

      >
        <v-row
          class="ma-0 pa-0"
          style="height:100vh !important;width:100vw;z-index:0"
        >
          <v-img
            style="max-height:100vh !important;min-height:100vh !important;min-width:100vw"
            :src="item.pictures[0]" eager/>

        </v-row>


        <v-row
          class="ma-0 mt-4 pa-0 menu-item d-none"
          style="position:fixed;top:75vh;color:#EDEDED"
          align="center"
        >

          <v-icon
            class="ma-0 mr-3 mb-4 pa-0"
            medium
            color= "#EDEDED"
          >
            mdi-arrow-collapse-left
          </v-icon>
          <p @click="$router.go(-1)">Volver</p>
        </v-row>




        <v-row
          class="ma-0 pa-0"
          style="width:100vw;position:absolute;font-family:Montserrat;font-size:35px;color:#EDEDED;top:64vh;letter-spacing:0px;line-height:90%;font-weight:bold"
        >
          <v-spacer></v-spacer>

            <v-row
              class="ma-0 mt-4 pa-0 menu-item"
              style="font-size:25px"

              @click="router(index)"
            >
              <v-spacer></v-spacer>

              <p class="mr-2 text-right" style="line-height:20px">{{ item.name }}</p>
              <v-icon
                class="ma-0 mr-4 mb-4 pa-0"
                medium
                color= "#EDEDED"
              >
                mdi-arrow-right
              </v-icon>
            </v-row>

        </v-row>
      </v-carousel-item>
    </v-carousel>
    </v-touch>
  </v-row>

</template>

<script>
  export default {
    data: () => ({
      model: null,
      blokeo: false,
      reverse: false,
      lastScrollPosition: 0
    }),
    created(){
      this.$store.commit('header', false);
      if (this.$store.state.caseIndex !== null) {
        this.model = this.$store.state.caseIndex
      } else {
        this.model = this.getRandomInt(this.$store.state.projects.length)
      }
    },
    beforeDestroy () {
      this.$el.removeEventListener('scroll', this.onScroll)
    },
    computed: {

    },
    methods: {
      router: function (number) {
        this.$store.commit('caseIndex', number);
        this.$router.push({ name: 'Workcase' })
      },
      getRandomInt: function (max) {
        return Math.floor(Math.random() * Math.floor(max));
      },
      onSwipeUp: async function () {
        if (this.blokeo == false && this.$route.name == "Work"){
          this.blokeo = true
          this.model = (this.model + 1) % (this.$store.state.projects.length)
          await this.sleep(1000);
          this.blokeo = false
        }
      },
      onSwipeDown: async function () {
        if (this.blokeo == false && this.$route.name == "Work"){
          this.reverse = true
          this.blokeo = true
          this.model = (this.model + this.$store.state.projects.length - 1) % this.$store.state.projects.length
          await this.sleep(1000);
          this.reverse = false
          this.blokeo = false
        }
      },
      sleep(sec) {
        return new Promise((resolve) => {
          setTimeout(resolve, sec);
        });
      },
      handleWheel: async function () {
        var temp = this;
        window.addEventListener('wheel', async function(event) {
            if (event.deltaY < 0) {
                await temp.onSwipeDown()
            } else if (event.deltaY > 0) {
                await temp.onSwipeUp()
            }
         })
      },
      onScroll () {
        // Get the current scroll position
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
        if (currentScrollPosition < 0) {
          return
        }
        // Set the current scroll position as the last scroll position
        this.lastScrollPosition = currentScrollPosition
      },

    }
  }
</script>

<style lang="sass" scoped>
  html
    height: 100vh
  body
     height: 100%

  .v-lazy-image
   filter: blur(5px)
   transition: filter .7s

  .v-lazy-image-loaded
   filter: blur(0)

  .menu-item:hover
    cursor: pointer

  .my-carousel-vertical-enter-active
    transition: 1s ease

  .my-carousel-vertical-leave-active
    transition: 1s ease

  .my-carousel-vertical-move
    transition: transform 1s

  .my-carousel-vertical-enter
    transform: translate(0, 100%)

  .my-carousel-vertical-leave

  .my-carousel-vertical-leave-to
    position: absolute
    top: 0
    transform: translate(0, -100%)

  .my-carousel-vertical-reverse-enter-active
    transition: 1s ease

  .my-carousel-vertical-reverse-leave-active
    transition: 1s ease

  .my-carousel-vertical-reverse-move
    transition: transform 1s

  .my-carousel-vertical-reverse-enter
    transform: translate(0, -100%)

  .my-carousel-vertical-reverse-leave

  .my-carousel-vertical-reverse-leave-to

    transform: translate(0, 100%)



</style>
