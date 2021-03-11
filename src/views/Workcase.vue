<template>
  <v-app
    style="background-color:#EDEDED"
  >
    <v-row
      class="ma-0 pa-0"
    >
      <v-row
        class="ma-0 pa-0"
        style="height:100vh !important;width:100vw;z-index:0"
      >
        <v-img
          style="max-height:100vh !important;min-height:100vh !important"
          :src="$store.state.projects[this.index].pictures[$store.state.projects[this.index].pictures.length - 1]" eager/>

      </v-row>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="height:50vh;width:100vw;z-index:0"
      align="center"
    >
      <v-col
      >
        <v-row class="ml-10 names text-uppercase">{{ $store.state.projects[this.index].name }}</v-row>
        <v-row class="ml-10 locations">{{ $store.state.projects[this.index].location }}, {{ $store.state.projects[this.index].year }}</v-row>
        <v-row class="ml-10 contractors">{{ $store.state.projects[this.index].contractor }}</v-row>

      </v-col>
      <v-col

      >
        <p class="mr-10 mt-3 descripcion1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p class="mr-10 descripcion1">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      </v-col>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      v-for="(item,i) in photos" :key="i"
    >
      <v-row
        class="ma-0 pa-0"
        style="height:100vh !important;width:100vw;z-index:0"
      >
        <v-img
          style="max-height:100vh !important;min-height:100vh !important"
          :src="item" eager/>

      </v-row>
    </v-row>
    <v-row
      class="ma-0 pa-0"
    >
      <p class="ma-16 mb-0 pb-10 pa-16 descripcion2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <p class="mx-16 mt-0 mb-16 px-16 pb-16 descripcion2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="height:100vh !important;width:100vw;z-index:0"
    >
      <v-img
        style="max-height:100vh !important;min-height:100vh !important"
        :src="$store.state.projects[this.index].pictures[0]" eager/>

    </v-row>
    <v-row
      class="ma-0 mx-16 pa-0 commander"
      style="height:70px;font-family:Montserrat;font-size:20px"
      align="center"
    >
      <span>ANTERIOR</span>
      <v-spacer></v-spacer>
      <span>SIGUIENTE</span>
    </v-row>




  </v-app>
</template>

<script>
export default {
    name: 'Workcase',
    props: ["index"],
    data() {
      return {
        photos: [],
        indek: null
      }
    },
    methods: {
      indexWhere(array, conditionFn) {
        const item = array.find(conditionFn)
        return array.indexOf(item)
      }
    },
    created(){
      this.$store.commit('header', false);
      if (this.index) {
          this.indek = this.index
      }
      window.scrollTo(0,0);

      for(var i = 1; i < this.$store.state.projects[this.index].pictures.length - 1; i++){
        this.photos.push(this.$store.state.projects[this.index].pictures[i]);
      }
      console.log(this.photos);
    }
}
</script>

<style lang="sass" scoped>

  .commander
    color: #707070
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
    span:hover
      cursor: pointer

  .names
    line-height: 90%
    font-size: 70px
    font-family: Vollkorn
    color: #707070

  .locations
    line-height: 110%
    font-size: 30px
    font-family: Vollkorn
    color: #707070
    letter-spacing: 1px

  .contractors
    line-height: 110%
    font-size: 30px
    font-family: Vollkorn
    color: #707070
    letter-spacing: 1px

  .descripcion1
    line-height: 110%
    font-size: 30px
    font-family: Vollkorn
    color: #707070
    letter-spacing: 1px

  .descripcion2
    line-height: 110%
    font-size: 50px
    font-family: Vollkorn
    color: #707070
    letter-spacing: 1px


</style>
