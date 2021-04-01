<template>
  <v-row
    class="ma-0 pa-0"
    style="position:absolute;background-color:#EDEDED;max-height:100vh;overflow-y:auto;max-width:100vw !important"
  >
    <v-row
      class="ma-0 mt-4 pa-0 menu-item"
      style="position:fixed;z-index:1;top:63.2vh;color:#EDEDED"
      align="center"
    >

      <v-icon
        class="ma-0 ml-4 mb-4 pa-0"
        medium
        color= "#EDEDED"
      >
        mdi-arrow-left
      </v-icon>
      <p class="ml-2" @click="route()" style="font-size:25px">Volver</p>
    </v-row>
    <v-row
      class="ma-0 pa-0"
    >
      <v-row
        class="ma-0 pa-0 d-none d-sm-flex"
        style="max-height:75vh !important;min-height:75vh;width:100vw;z-index:0"
      >
        <v-img
          style="max-height:75vh !important;min-height:75vh !important"
          :src="this.$store.state.projects[this.$store.state.caseIndex].pictures[1]" eager/>

      </v-row>

      <v-row
        class="ma-0 pa-0 d-sm-none"
        style="height:65vh !important;width:100vw;z-index:0"
      >
        <v-img
          style="max-height:75vh !important;min-height:75vh !important"
          :src="this.$store.state.projects[this.$store.state.caseIndex].pictures[1]" eager/>

      </v-row>
    </v-row>

    <v-row
      class="ma-0 pa-0 d-none d-sm-flex"
      style="width:100vw;min-height:25vh !important;max-height:25vh !important;z-index:0;background-color:#EDEDED"
      align="center"
    >
      <v-row
        class="ma-0 pa-0"
        style="width:140px"
      >
        <p style="width:100vw" class="ma-0 ml-16 pa-0 pl-16 names text-uppercase">{{ this.$store.state.projects[this.$store.state.caseIndex].name }}</p>
        <p style="width:100vw" class="ma-0 ml-16 pa-0 pl-16 locations">{{ this.$store.state.projects[this.$store.state.caseIndex].location }}</p>
      </v-row>
    </v-row>
    <v-row
      class="ma-0 pa-0 d-none d-sm-flex"
      v-if="this.$store.state.projects[this.$store.state.caseIndex].description1"
    >
      <p class="ma-0 mx-16 pa-0 px-16 descripcion3">{{ this.$store.state.projects[this.$store.state.caseIndex].description1 }}</p><br>
      <p class="ma-0 mb-16 mx-16 pa-0 px-16 descripcion1">{{ this.$store.state.projects[this.$store.state.caseIndex].description2 }}</p>
    </v-row>

    <v-row
      class="ma-0 pa-0 d-sm-none"
      style="width:100vw;z-index:0;background-color:#EDEDED;min-height:35vh;max-height:35vh"
      align="center"
    >
    <v-row
      class="ma-0 pa-0"
      style="width:140px"
    >
      <p style="width:100vw" class="ma-0 ml-16 pa-0 names text-uppercase">{{ this.$store.state.projects[this.$store.state.caseIndex].name }}</p>
      <p style="width:100vw" class="ma-0 ml-16 pa-0 locations">{{ this.$store.state.projects[this.$store.state.caseIndex].location }}</p>
    </v-row>



    </v-row>
    <v-row
      class="ma-0 pa-0 d-sm-none"
      style="width:100vw;background-color:#EDEDED"
      align="center"
      v-if="this.$store.state.projects[this.$store.state.caseIndex].description1"
    >
      <p class="ma-0 mt-8 mx-16 mb-16 pb-8 descripcion1">{{ this.$store.state.projects[this.$store.state.caseIndex].description1 }}<br><br>{{ this.$store.state.projects[this.$store.state.caseIndex].description2 }}</p>

    </v-row>

    <!-- Central images loop -->
    <v-row
      class="ma-0 pa-0"
      v-for="(item,i) in this.set" :key="i"

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
        class="ma-0 mt-3 pa-0 d-sm-none"
        style="height:50vh !important;width:100vw;z-index:0"
      >
        <v-img
          style="max-height:50vh !important;min-height:50vh !important"
          :src="item" eager/>

      </v-row>
    </v-row>







    <v-row
      class="ma-0 mt-3 mt-sm-0 pa-0"
      style="height:100vh !important;width:100vw;z-index:0"
    >
      <v-img
        style="max-height:100vh !important;min-height:100vh !important"
        :src="this.$store.state.projects[this.$store.state.caseIndex].pictures[0]" eager/>

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
        case: [],
        pics: [],
        indexer: null
      }
    },
    components: {
      'Footer': require('@/components/Footer.vue').default
    },
    created(){

      this.$store.commit('header', false);
      this.fixer();
    },
    beforeDestroy () {
      console.log('destroy')
    },
    computed: {
      set: function () {
        var tempset = []
        for (var i = 2; i < this.$store.state.projects[this.$store.state.caseIndex].pictures.length; i++) {
          tempset.push(this.$store.state.projects[this.$store.state.caseIndex].pictures[i])
        }
        return tempset
      }
    },
    methods: {
      route: function () {
        this.$router.go(-1)
      },
      fixer(){
        this.pics = []
        var temp = this.$store.state.projects[this.$store.state.caseIndex].pictures
        var length = temp.length
        for (var i = 0; i < length - 2; i++) {
          this.pics.push(temp[i])
        }

      },
      anterior(){
        this.$el.scrollTo(0,0);
        this.case = this.$store.state.projects[(this.$store.state.projects[this.$store.state.caseIndex].id + this.$store.state.projects.length - 1) % this.$store.state.projects.length];
        this.$store.state.caseIndex = this.case.id
        this.$store.commit('caseIndex', this.$store.state.caseIndex);
        this.fixer()
      },
      siguiente(){
        this.$el.scrollTo(0,0);
        this.case = this.$store.state.projects[(this.$store.state.projects[this.$store.state.caseIndex].id + 1) % this.$store.state.projects.length];
        this.$store.state.caseIndex = this.case.id
        this.$store.commit('caseIndex', this.$store.state.caseIndex);
        this.fixer()
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
    font-size: 20px
    font-family: Vollkorn
    color: #707070
    letter-spacing: 1px

  .descripcion2
    line-height: 110%
    font-size: 20px
    font-family: Vollkorn
    color: #707070
    letter-spacing: 1px

  .descripcion3
    line-height: 110%
    font-size: 40px
    font-family: Vollkorn
    color: #707070
    letter-spacing: 1px


</style>
