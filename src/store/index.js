import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActive: null,
    cover: [
      "eladio-1.jpg","eladio-2.jpg"
    ],
    projects: [
      {
          id: 0,
          name: "Nombre del proyecto 0",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["eladio-1.jpg","eladio-2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 1,
          name: "Nombre del proyecto 1",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["eladio-1.jpg","eladio-2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 2,
          name: "Nombre del proyecto 2",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["eladio-1.jpg","eladio-2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 3,
          name: "Nombre del proyecto 3",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["eladio-1.jpg","eladio-2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 4,
          name: "Nombre del proyecto 4",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["eladio-1.jpg","eladio-2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 5,
          name: "Nombre del proyecto 5",
          location: "Puerto Varas",
          year: "2012",
          pictures: ["eladio-1.jpg","eladio-2.jpg"],
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