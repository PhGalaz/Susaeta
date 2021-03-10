<template>
  <v-app
  >
    <v-row
      class="ma-0 pa-0"
    >
      <v-row
        height="10vh"
        class="ma-0 pa-0"
        style="height:100vh !important;width:100vw;z-index:0"
      >
        <v-img
          style="max-height:100vh !important;min-height:100vh !important"
          :src="$store.state.projects[this.index].pictures[0]" eager/>

      </v-row>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="height:50vh;width:100vw;z-index:0"
      align="center"
    >
      <v-col
      >
        <p class="ml-10 names text-uppercase">{{ $store.state.projects[this.index].name }}</p>
        <p class="ml-10 locations">{{ $store.state.projects[this.index].location }}, {{ $store.state.projects[this.index].year }}</p>
        <p class="ml-10 contractors">{{ $store.state.projects[this.index].contractor }}</p>

      </v-col>
      <v-col

      >
        <p class="mr-10 descripcion1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </v-col>
    </v-row>
    <v-row
      class="ma-0 pa-0"
    >
      <v-row
        height="10vh"
        class="ma-0 pa-0"
        style="height:100vh !important;width:100vw;z-index:0"
      >
        <v-img
          style="max-height:100vh !important;min-height:100vh !important"
          :src="$store.state.projects[this.index].pictures[1]" eager/>

      </v-row>
    </v-row>





  </v-app>
</template>

<script>
export default {
    name: 'Workcase',
    props: ["name"],
    data() {
      return {
        index: null,
        nombre: null
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
      if (this.name) {
          this.nombre = this.name
      }
      const items = this.$store.state.projects;
      this.index = this.indexWhere(items, item => item.name === this.nombre);
    }
}
</script>

<style lang="sass" scoped>

  .names

    line-height: 110%
    font-size: 70px
    font-family: Vollkorn
    color: #707070
    bottom: 220px
    z-index: 100


  .locations

    line-height: 110%
    font-size: 30px
    font-family: Vollkorn
    color: #707070
    letter-spacing: 1px
    bottom: 200px

  .contractors
    position: absolute
    line-height: 110%
    font-size: 30px
    font-family: Vollkorn
    color: #707070
    letter-spacing: 1px
    bottom: 370px

  .descripcion1
    line-height: 110%
    font-size: 30px
    font-family: Vollkorn
    color: #707070
    letter-spacing: 1px


</style>
