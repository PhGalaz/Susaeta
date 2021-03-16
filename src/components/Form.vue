<template>
  <v-row
    class="ma-0 pa-0"
    style="width:100%;height:70%"
    align="center"
  >
    <v-row
      class="ma-0 pa-0"
      style="width:100%"
    >
      <v-text-field
        class="email"
        label="Email"
        color="#707070"
        outlined
        background-color="#EDEDED"
        width="100%"
        solo
        flat
      ></v-text-field>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100%"
    >
      <v-textarea
        label="Comentario"
        no-resize
        outlined
        color="#707070"
        background-color="#EDEDED"
        solo
        rows="8"
        row-height="15"
        flat
      ></v-textarea>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100%"
    >
      <v-spacer></v-spacer>
      <v-btn
        style="text-transform:none;font-size:20px;font-family:Montserrat;letter-spacing: 0px"
        text
        color="#707070"
      >
        Enviar
      </v-btn>
    </v-row>
  </v-row>
</template>

<script>

</script>

<style lang="sass">

  .v-input
    color: red !important
    font-family: Montserrat !important
    font-size: 20px !important
    border-radius: 0px !important


  .v-text-field--outlined fieldset
    color: #EDEDED !important
    border-radius: 0px !important
    opacity: .6 !important

  .v-text-field--outlined textarea
    color: #707070 !important
    border-radius: 0px !important


  .cafe
    margin-left: 40px


  .v-label
    color: #707070 !important
    font-family: Montserrat !important
    opacity: .6 !important

</style>
