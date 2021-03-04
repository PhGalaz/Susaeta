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
          pictures: ["b01.jpg","b02.jpg","b03.jpg","b04.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 2,
          name: "Casa Riscos",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["casamarina.jpg","IMG_9315.JPG","IMG_9320.JPG","IMG_9326.JPG","IMG_9338.JPG","IMG_9345.JPG"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 3,
          name: "Casa Riscos",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["c04.jpg","c01.jpg","c02.jpg","c03.jpg","c05.jpg","c06.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 4,
          name: "Casa Riscos",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["d05.jpg","d01.jpg","d02.jpg","d03.jpg","d04.jpg","d06.jpg","d07.jpg","d08.jpg","d09.jpg","d10.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 5,
          name: "Casa Riscos",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["e04.jpg","e01.jpg","e02.jpg","e03.jpg","e05.jpg"],
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
