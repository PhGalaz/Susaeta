<template>
  <v-row
    class="ma-0 pa-0"
  >
    <v-row
      class="ma-0 pa-0"
      style="position:relative;width:100vw;height:100vh"
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
        class="ma-0 ml-16 pa-0 pl-16 d-none d-sm-flex"
        style="position:absolute;font-family:Montserrat;font-size:35px;color:#EDEDED;top:45vh;letter-spacing:0px;line-height:90%;font-weight:bold"
      >
        <p>{{ item.name }}<br><span style="font-size:20px">{{ item.location }}, {{ item.year }}</span></p>
      </v-row>





      <v-row
        class="ma-0 pa-0 d-sm-none"
        style="width:100vw;position:absolute;font-family:Montserrat;font-size:35px;color:#EDEDED;top:45vh;letter-spacing:0px;line-height:90%;font-weight:bold"
      >
        <v-spacer></v-spacer>
        <router-link
          class="ma-0 pa-0 text-decoration-none"
          :to="{ name: 'Workcase', params: {index: index} }"
        >
          <v-row
            class="ma-0 mt-4 pa-0 menu-item"
            style="font-size:30px"
            align="center"
          >
            <p class="text-right" style="line-height:25px">{{ item.name }}<br><span style="font-size:20px">{{ item.location }}, {{ item.year }}</span></p>
            <v-icon
              class="ma-0 ml-3 mb-3 pa-0"
              medium
              color= "#EDEDED"
            >
              mdi-arrow-collapse-right
            </v-icon>
          </v-row>
        </router-link>
      </v-row>
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
