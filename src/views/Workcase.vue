<template>
  <v-app
    style="background-color:#EDEDED"
  >
    <v-row
      class="ma-0 pa-0"
    >
      <v-row
        class="ma-0 pa-0 d-none d-sm-flex"
        style="height:100vh !important;width:100vw;z-index:0"
      >
        <v-img
          style="max-height:100vh !important;min-height:100vh !important"
          :src="this.case.pictures[this.case.pictures.length - 1]" eager/>

      </v-row>
      <v-row
        class="ma-0 mt-4 pa-0 menu-item"
        style="position:fixed;z-index:2000;top:45vh;color:#EDEDED"
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
        class="ma-0 pa-0 d-sm-none"
        style="height:50vh !important;width:100vw;z-index:0"
      >
        <v-img
          style="max-height:50vh !important;min-height:50vh !important"
          :src="this.case.pictures[this.case.pictures.length - 1]" eager/>

      </v-row>
    </v-row>

    <v-row
      class="ma-0 pa-0 d-none d-sm-flex"
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
      class="ma-0 mb-16 pa-0 d-sm-none"
      style="width:100vw;z-index:0"
      align="center"
    >
      <v-row
        class="ma-0 mt-16 mb-16 mx-16 pa-0"
      >
        <v-row class="ma-0 pa-0 names text-uppercase" style="max-width:80vw"><p>{{ this.case.name }}</p></v-row>
        <v-row class="ma-0 pa-0 locations" style="width:100vw">{{ this.case.location }}, {{ this.case.year }}</v-row><br>
        <v-row class="ma-0 pa-0 contractors" style="width:100vw">{{ this.case.contractor }}</v-row>
      </v-row>


      <v-row
        class="ma-0 mt-8 mb-16 mx-16 pa-0"
      >
        <p class="ma-0 pa-0 descripcion1">{{ this.case.description1 }}</p><br>
        <p class="ma-0 pa-0 descripcion1">{{ this.case.description2 }}</p>
      </v-row>
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
      class="ma-0 pa-0 d-none d-sm-flex"
      style="height:100vh"
      align="center"
    >
      <p class="mx-16 px-16 descripcion2">{{ this.case.description1 }}<br><br>{{ this.case.description2 }}</p>

    </v-row>
    <v-row
      class="ma-16 pa-0 py-16 d-sm-none"
      align="center"
    >
      <p class="descripcion1">{{ this.case.description1 }}<br><br>{{ this.case.description2 }}</p>

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
      class="ma-0 mx-16 pa-0 commander menu-item"
      style="height:70px;font-family:Montserrat;color:#707070;font-weight:bold"
      align="center"
    >

      <span @click="anterior()">Anterior</span>
      <v-spacer></v-spacer>
      <span @click="siguiente()">Siguiente</span>

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

  .menu-item:hover
    cursor: pointer

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
