<template>
  <v-row
    class="ma-0 pa-0"
  >
    <v-row
      class="ma-0 pa-0"
      style="position:relative;width:100vw;height:100vh"
      v-for="(item, index) in $store.state.projects" :key="index"
    >
      <router-link
        :to="{ name: 'Workcase', params: {index: index} }"
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
          style="position:absolute;font-family:Montserrat;font-size:35px;color:#EDEDED;top:80vh;letter-spacing:0px;line-height:90%;font-weight:bold"
        >
          <p>{{ item.name }}<br><span style="font-size:20px">{{ item.location }}, {{ item.year }}</span></p>
        </v-row>
      </router-link>
    </v-row>
  </v-row>
</template>

<script>
  export default {
    created(){
      this.$store.commit('header', false);
      window.scrollTo(0,0);

    }
  }
</script>

<style lang="sass">

</style>
