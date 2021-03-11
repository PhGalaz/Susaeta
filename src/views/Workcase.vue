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
          :src="this.case.pictures[this.case.pictures.length - 1]" eager/>

      </v-row>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="height:75vh;width:100vw;z-index:0"
      align="center"
    >
      <v-col
      >
        <v-row class="ma-0 ml-16 pa-0 pl-16 names text-uppercase">{{ this.case.name }}</v-row>
        <v-row class="ma-0 ml-16 pa-0 pl-16 locations">{{ this.case.location }}, {{ this.case.year }}</v-row>
        <v-row class="ma-0 ml-16 pa-0 pl-16 contractors">{{ this.case.contractor }}</v-row>

      </v-col>
      <v-col
        class="ma-0 pa-0"
      >
        <p class="ma-0 mr-16 pa-0 pr-16 descripcion1">{{ this.case.description1 }}</p><br>
        <p class="ma-0 mr-16 pa-0 pr-16 descripcion1">{{ this.case.description2 }}</p>

      </v-col>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      v-for="(item,i) in this.case.pictures" :key="i"
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
      style="height:100vh"
      align="center"
    >
      <p class="mx-16 px-16 descripcion2">{{ this.case.description1 }}<br><br>{{ this.case.description2 }}</p>

    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="height:100vh !important;width:100vw;z-index:0"
    >
      <v-img
        style="max-height:100vh !important;min-height:100vh !important"
        :src="this.case.pictures[0]" eager/>

    </v-row>
    <v-row
      id="app"
      class="ma-0 mx-16 pa-0 commander"
      style="height:70px;font-family:Montserrat;font-size:20px;color:#707070"
      align="center"
    >

      <span @click="anterior()">ANTERIOR</span>
      <v-spacer></v-spacer>
      <span @click="siguiente()">SIGUIENTE</span>

    </v-row>

  </v-app>
</template>

<script>
export default {
    name: 'Workcase',
    props: ["index"],
    data() {
      return {
        case: []
      }
    },
    created(){
      this.$store.commit('header', false);
      window.scrollTo(0,0);
      this.case = this.$store.state.projects[this.index];

    },
    methods: {
      anterior(){
        window.scrollTo(0,0);
        this.case = this.$store.state.projects[(this.case.id + this.$store.state.projects.length - 1) % this.$store.state.projects.length];
      },
      siguiente(){
        window.scrollTo(0,0);
        this.case = this.$store.state.projects[(this.case.id + 1) % this.$store.state.projects.length];
      }
    }
}
</script>

<style lang="sass" scoped>


  .commander
    color: #707070
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
    font-size: 40px
    font-family: Vollkorn
    color: #707070
    letter-spacing: 1px

  .descripcion2
    line-height: 110%
    font-size: 60px
    font-family: Vollkorn
    color: #707070
    letter-spacing: 1px


</style>
