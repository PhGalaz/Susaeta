<template>
  <v-row
    class="ma-0 pa-0"
    style="position:absolute;background-color:#707070;max-height:100vh;overflow-y:auto"
  >
    <v-carousel
      style="width:100vw"
      height="100vh"
      hide-delimiters
      :show-arrows="true"
      continuos
      :vertical="true"
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
            style="max-height:100vh !important;min-height:100vh !important"
            :src="item.pictures[0]" eager/>

        </v-row>


        <v-row
          class="ma-0 mt-4 pa-0 menu-item d-none"
          style="position:fixed;top:45vh;color:#EDEDED"
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
          style="width:100vw;position:absolute;font-family:Montserrat;font-size:35px;color:#EDEDED;top:45vh;letter-spacing:0px;line-height:90%;font-weight:bold"
        >
          <v-spacer></v-spacer>
          <router-link
            class="ma-0 pa-0 text-decoration-none"
            :to="{ name: 'Workcase', params: {index: index} }"
          >
            <v-row
              class="ma-0 mt-4 pa-0 menu-item"
              style="font-size:30px"
              align="center"
            >
              <p class="text-right" style="line-height:25px">{{ item.name }}<br><span style="font-size:20px">{{ item.location }}, {{ item.year }}</span></p>
              <v-icon
                class="ma-0 ml-3 mb-3 pa-0"
                medium
                color= "#EDEDED"
              >
                mdi-arrow-collapse-right
              </v-icon>
            </v-row>
          </router-link>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-row>
</template>

<script>
  export default {
    created(){
      this.$store.commit('header', false);

    }
  }
</script>

<style lang="sass" scoped>

  .menu-item:hover
    cursor: pointer

  .my-carousel-vertical-enter-active
    transition: 2s ease

  .my-carousel-vertical-leave-active
    transition: 2s ease

  .my-carousel-vertical-move
    transition: transform 6s

  .my-carousel-vertical-enter
    transform: translate(0, 100%)

  .my-carousel-vertical-leave

  .my-carousel-vertical-leave-to
    position: absolute
    top: 0
    transform: translate(0, -100%)

  .my-carousel-vertical-reverse-enter-active
    transition: 2s ease

  .my-carousel-vertical-reverse-leave-active
    transition: 2s ease

  .my-carousel-vertical-reverse-move
    transition: transform 6s

  .my-carousel-vertical-reverse-enter
    transform: translate(0, -100%)

  .my-carousel-vertical-reverse-leave

  .my-carousel-vertical-reverse-leave-to

    transform: translate(0, 100%)

</style>
