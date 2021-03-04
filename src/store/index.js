import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActive: null,
    cabin1: "casabosquina.jpg",
    projects: [
      {
          id: 0,
          name: "Casa Riscos",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["casabosquina.jpg","casariscos3.jpg","casariscos6.jpg","casariscos7.jpg","casariscos9.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 1,
          name: "Casa Riscos",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["casamarina.jpg",],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 2,
          name: "Casa Riscos",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["IMG_9315.JPG","IMG_9320.JPG","IMG_9326.JPG","IMG_9338.JPG","IMG_9345.JPG"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 3,
          name: "Casa Riscos",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["prueba5.jpg","prueba6.jpg","casaplayina.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 4,
          name: "Casa Riscos",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["prueba1.jpeg","prueba2.jpeg","prueba3.jpeg","prueba4.jpeg"],
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
