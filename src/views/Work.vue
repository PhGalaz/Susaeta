<template>
  <v-row
    class="ma-0 pa-0"
  >
    <v-row
      class="ma-0 pa-0"
      style="width:100vw;height:100vh"
      v-for="(item, index) in $store.state.projects" :key="index"
    >
      <v-row
        class="ma-0 pa-0"
        style="height:100vh !important;width:100vw;z-index:0"
      >
        <v-img
          style="max-height:100vh !important;min-height:100vh !important"
          :src="item.pictures[0]" eager/>

      </v-row>
      <v-row
        class="ma-0 ml-16 pa-0 pl-16"
        style="position:absolute;font-family:Montserrat;font-size:80px;color:#EDEDED"
      >
        <span style="top:75vh">{{ item.name }}</span>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>

</script>

<style lang="sass">

</style>
