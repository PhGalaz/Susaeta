import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { createSimpleTransition } from "vuetify/lib/components/transitions/createTransition";

const myTransition = createSimpleTransition("my-transition");
Vue.component("my-carousel", myTransition);


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
