<template>
  <v-row
    class="ma-0 pa-0"
    style="position:absolute;background-color:#EDEDED;max-height:100vh;overflow-y:auto;max-width:100vw !important"
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
        style="position:fixed;z-index:1;top:60vh;color:#EDEDED"
        align="center"
      >

        <v-icon
          class="ma-0 mb-4 pa-0"
          medium
          color= "#EDEDED"
        >
          mdi-chevron-double-left
        </v-icon>
        <p @click="$router.go(-1)" style="font-size:25px">Volver</p>
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
      class="ma-0 my-16 pa-0 py-8 d-none d-sm-flex"
      style="width:100vw;z-index:0;background-color:#EDEDED"
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
      class="ma-0 pa-0 d-sm-none"
      style="width:100vw;z-index:0;background-color:#EDEDED"
      align="center"
    >
      <v-row
        class="ma-0 mt-16 mb-16 pa-0"
      >
        <v-row class="ma-0 ml-16 pa-0 names text-uppercase" style="max-width:80vw"><p>{{ this.case.name }}</p></v-row>
        <v-row class="ma-0 ml-16 pa-0 locations">{{ this.case.location }}, {{ this.case.year }}</v-row><br>
        <v-row class="ma-0 ml-16 pa-0 contractors">{{ this.case.contractor }}</v-row>
      </v-row>


      <v-row
        class="ma-0 mt-8 mb-16 mx-16 pa-0"
      >
        <p class="ma-0 pa-0 descripcion1">{{ this.case.description1 }}</p><br>
        <p class="ma-0 mb-16 pa-0 descripcion1">{{ this.case.description2 }}</p>
      </v-row>
    </v-row>

    <!-- Central images loop -->
    <v-row
      class="ma-0 pa-0"
      v-for="(item,i) in this.case.pictures" :key="i"
    >
      <v-row
        class="ma-0 pa-0 d-none d-sm-flex"
        style="height:100vh !important;width:100vw;z-index:0"
      >
        <v-img
          style="max-height:100vh !important;min-height:100vh !important"
          :src="item" eager/>

      </v-row>
      <v-row
        class="ma-0 pa-0 d-sm-none"
        style="height:50vh !important;width:100vw;z-index:0"
      >
        <v-img
          style="max-height:50vh !important;min-height:50vh !important"
          :src="item" eager/>

      </v-row>
    </v-row>



    <v-row
      class="ma-0 pa-0 d-none d-sm-flex"
      style="height:100vh;background-color:#EDEDED"
      align="center"
    >
      <p class="mx-16 px-16 descripcion2">{{ this.case.description1 }}<br><br>{{ this.case.description2 }}</p>

    </v-row>
    <v-row
      class="ma-0 pa-0 d-sm-none"
      style="width:100vw;background-color:#EDEDED"
      align="center"
    >
      <p class="ma-16 my-16 py-8 descripcion1">{{ this.case.description1 }}<br><br>{{ this.case.description2 }}</p>

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
      class="ma-0 pa-0 commander"
      style="min-height:70px;font-family:Montserrat;font-size:20px;color:#707070;font-weight:bold;background-color:#EDEDED"
      align="center"
    >

      <span class="ma-0 ml-8 ml-sm-16 pa-0" @click="anterior()">Anterior</span>
      <v-spacer></v-spacer>
      <span class="ma-0 mr-8 mr-sm-16 pa-0" @click="siguiente()">Siguiente</span>

    </v-row>


    <v-row
      class="ma-0 pa-0 d-none d-sm-flex"
      style="width:100vw;background-color:#91816A;height:160px"
      align="center"
    >
      <Footer class="ma-0 pa-0"></Footer>
    </v-row>
    <v-row
      class="ma-0 pa-0 d-sm-none"
      style="width:100vw;background-color:#91816A"
      align="center"
    >
      <Footer class="ma-0 pa-0" style="transform:scale(0.8);transform-origen:left"></Footer>
    </v-row>



  </v-row>
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
    components: {
      'Footer': require('@/components/Footer.vue').default
    },
    created(){
      this.$store.commit('header', false);
      this.case = this.$store.state.projects[this.index];

    },
    async mounted () {
      this.$store.commit('burger', true);
      await this.sleep(1000);
      this.$store.commit('burger', false)
    },
    methods: {
      anterior(){
        this.$el.scrollTo(0,0);
        this.case = this.$store.state.projects[(this.case.id + this.$store.state.projects.length - 1) % this.$store.state.projects.length];
      },
      siguiente(){
        this.$el.scrollTo(0,0);
        this.case = this.$store.state.projects[(this.case.id + 1) % this.$store.state.projects.length];
      },
      sleep(sec) {
        return new Promise((resolve) => {
          setTimeout(resolve, sec);
        });
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
    font-size: 50px
    font-family: Vollkorn
    color: #707070

  .locations
    line-height: 110%
    font-size: 20px
    font-family: Vollkorn
    color: #707070
    letter-spacing: 1px

  .contractors
    line-height: 110%
    font-size: 20px
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
