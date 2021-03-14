<template>
  <v-row
    class="ma-0 pa-0"
    style="font-family:Montserrat;height:100px"
    align="center"
  >
    <v-row
      class="ma-0 pa-0 d-none d-sm-flex"
      style="width:100%"
    >
      <p class="ma-0 pa-0 pie">Eladio Susaeta, arquitecto Universidad X<br>Puerto Varas, Región de Los Lagos, Chile<br>
        <v-icon
          class="mr-1 mb-1"
          x-small
          color= "#EDEDED"
        >
          mdi-copyright
        </v-icon>
        <span style="font-size:15px">{{ new Date().getFullYear() }}</span><br>
        <span style="font-size:10px">developed by Salvador</span>
      </p>
      <v-spacer></v-spacer>
      Logo
    </v-row>
    <v-row
      class="ma-0 pa-0 d-sm-none"
      style="width:100%"
      justify="center"
    >
      Logo
      <p class="ma-0 pa-0 pie text-center" style="font-size:15px">Eladio Susaeta, arquitecto Universidad X<br>Puerto Varas, Región de Los Lagos, Chile<br>
        <v-icon
          class="mr-1 mb-1"
          x-small
          color= "#EDEDED"
        >
          mdi-copyright
        </v-icon>
        <span style="font-size:15px">{{ new Date().getFullYear() }}</span><br>
        <span style="font-size:10px">developed by Salvador</span>
      </p>
    </v-row>
  </v-row>
</template>

<script>

</script>

<style lang="sass">
  .pie
    color: #EDEDED
    line-height: 115%
</style>
