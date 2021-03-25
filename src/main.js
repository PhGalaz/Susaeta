import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { createSimpleTransition } from "vuetify/lib/components/transitions/createTransition";
import router from './router'
import store from './store'
import { VLazyImagePlugin } from "v-lazy-image";
import VueSocialChat from 'vue-social-chat'

Vue.use(VueSocialChat)


const myTransition = createSimpleTransition("my-transition");
const myTransitionVertical = createSimpleTransition("my-transition-vertical");
const myTransitionVerticalReverse = createSimpleTransition("my-transition-vertical-reverse");


Vue.component("my-carousel", myTransition);
Vue.component("my-carousel-vertical", myTransitionVertical);
Vue.component("my-carousel-vertical-reverse", myTransitionVerticalReverse);
Vue.use(VueRouter)

Vue.use(VLazyImagePlugin);

import { VueHammer } from 'vue2-hammer'
import VueTouch from 'vue-touch';
Vue.use(VueHammer)
Vue.use(VueTouch)


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
