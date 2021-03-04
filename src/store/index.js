import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActive: null,
    cover: [
      "casaplayina.jpg",
      "prueba1.jpeg"


    ],
    projects: [
      {
          id: 0,
          name: "Casa Riscos",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["prueba1.jpeg","prueba5.jpg","prueba6.jpg","prueba2.jpeg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 1,
          name: "Casa Riscos",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["prueba1.jpeg","prueba5.jpg","prueba6.jpg","prueba2.jpeg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 2,
          name: "Casa Riscos",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["prueba1.jpeg","prueba5.jpg","prueba6.jpg","prueba2.jpeg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 3,
          name: "Casa Riscos",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["prueba1.jpeg","prueba5.jpg","prueba6.jpg","prueba2.jpeg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 4,
          name: "Casa Riscos",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["prueba1.jpeg","prueba5.jpg","prueba6.jpg","prueba2.jpeg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 5,
          name: "Casa Riscos",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["prueba1.jpeg","prueba5.jpg","prueba6.jpg","prueba2.jpeg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      }
    ]
  },
  mutations: {
    header(state, res){
      state.isActive = res;
    }
  },
  actions: {
  },
  modules: {
  }
})
