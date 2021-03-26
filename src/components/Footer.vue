<template>
  <v-row
    class="ma-0 pa-0"
    style="font-family:Montserrat;width:100%;background-color:#91816A"
    align="center"
  >




    <v-row
      class="ma-0 mx-sm-16 pa-0 px-sm-16 d-none d-sm-flex"
      align="center"
    >
      <v-row
        class="ma-0 pa-0"
        align="center"
      >
        <p class="ma-0 mt-2 pa-0 pie" style="line-height:130%">Arquitecto Eladio Susaeta, Chile<br>
          <v-icon
            class="mr-1 mt-1 mb-1"
            small
            color= "#EDEDED"
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

        <v-img max-height="100px" max-width="100px" src="timbre-ESsmall.png"/>
      </v-row>

    </v-row>




    <v-row
      class="ma-0 pa-0 d-sm-none"
      justify="center"
    >
      <v-img class="ma-0 mt-2 pa-0" max-height="70px" max-width="70px" src="timbre-ESsmall.png"/>
      <p class="ma-0 mt-3 pa-0 pie text-center" style="width:100vw;font-size:15px">Arquitecto Eladio Susaeta, Chile<br>
        <v-icon
          class="mt-1 mr-1 mb-1"
          small
          color= "#EDEDED"
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
</template>
<script>
  export default {
    methods: {
      Salvador: function () {
        window.open("https://www.pinkdogstudio.com", "_blank");
      }
    }
  }
</script>

<style lang="sass">
  .agency:hover
    cursor: pointer
  .pie
    color: #EDEDED
    line-height: 140%
</style>
