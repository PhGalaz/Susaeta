<template>
  <v-row
    class="ma-0 pa-0"
    style="position:absolute;font-family:Montserrat;height:130px;width:100%;background-color:#91816A"
    align="center"
  >
    <v-row
      class="ma-0 mx-sm-16 pa-0 px-sm-16 d-none d-sm-flex"
      style="height:130px"
      align="center"
    >
      <v-row
        class="ma-0 pa-0"
        style="height:130px"
        align="center"
      >
        <p class="ma-0 mt-2 pa-0 pie" style="line-height:130%">Arquitecto Eladio Susaeta<br>Puerto Varas, Región de Los Lagos, Chile<br>
          <v-icon
            class="mr-1 mb-1"
            x-small
            color= "#EDEDED"
          >
            mdi-copyright
          </v-icon>
          <span style="font-size:15px">{{ new Date().getFullYear() }}</span><br>
          <span style="font-size:10px">developed by <a
            class="ma-0 pa-0 agency"
            style="font-size:10px;color:#EDEDED !important"
            @click="Salvador()"
          >Salvador</a></span>
        </p>
      </v-row>
      <v-row
        class="ma-0 pa-0"
        style="height:130px;width:100px"
        justify="end"
        align="center"
      >

        <v-img max-height="80px" max-width="80px" src="logo.png"/>
      </v-row>

    </v-row>
    <v-row
      class="ma-0 pa-0 d-sm-none"
      justify="center"
    >
      <v-img max-height="60px" max-width="60px" src="logo.png"/>
      <p class="ma-0 mt-2 pa-0 pie text-center" style="width:100vw;font-size:12px">Arquitecto Eladio Susaeta<br>Puerto Varas, Región de Los Lagos, Chile<br>
        <v-icon
          class="mr-1 mb-1"
          x-small
          color= "#EDEDED"
        >
          mdi-copyright
        </v-icon>
        <span style="font-size:12px">{{ new Date().getFullYear() }}</span><br>
        <span style="font-size:8px">developed by
          <a
            class="ma-0 pa-0 agency"
            style="font-size:8px;color:#EDEDED !important"
            @click="Salvador()"
          >Salvador</a>
        </span>
      </p>
    </v-row>
  </v-row>
</template>
<script>
  export default {
    methods: {
      Salvador: function () {
        window.open("https://www.lossalvadores.com", "_blank");
      }
    }
  }
</script>

<style lang="sass">
  .agency:hover
    cursor: pointer
  .pie
    color: #EDEDED
    line-height: 135%
</style>
