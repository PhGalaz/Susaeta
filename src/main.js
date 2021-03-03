import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { createSimpleTransition } from "vuetify/lib/components/transitions/createTransition";
import router from './router'
import store from './store'

const myTransition = createSimpleTransition("my-transition");
Vue.component("my-carousel", myTransition);
Vue.use(VueRouter)


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
