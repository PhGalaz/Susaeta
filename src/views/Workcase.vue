<template>
  <v-app
  >
    <v-row
      class="ma-0 pa-0"
    >
      <v-row
        height="10vh"
        class="ma-0 pa-0"
        style="height:100vh !important;width:100vw;z-index:0;background-color:red"
      >
        <v-img
          style="max-height:100vh !important;min-height:100vh !important"
          :src="$store.state.projects[this.index].pictures[0]" eager/>

      </v-row>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="min-heigth:50vh;max-heigth:50vh;width:100vw;z-index:0;background-color:red"
    >
      <v-col
        class="names"
        style="background-color:blue"
      >
        {{ $store.state.projects[this.index].name }}
      </v-col>
      <v-col>

      </v-col>
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
    height: 50vh
    font-size: 70px
    font-family: Vollkorn
    color: #EDEDED

</style>
