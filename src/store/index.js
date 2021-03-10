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
          name: "Nombre 0",
          location: "Ciudad 0",
          year: "Año 0",
          pictures: ["eladio-1.jpg","eladio-2.jpg"],
          contractor: "Constructora 0",
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 1,
          name: "Nombre 1",
          location: "Ciudad 1",
          year: "Año 1",
          pictures: ["eladio-1.jpg","eladio-2.jpg"],
          contractor: "Constructora 1",
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 2,
          name: "Nombre 2",
          location: "Ciudad 2",
          year: "Año 2",
          pictures: ["eladio-1.jpg","eladio-2.jpg"],
          contractor: "Constructora 2",
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 3,
          name: "Nombre 3",
          location: "Ciudad 3",
          year: "Año 3",
          pictures: ["eladio-1.jpg","eladio-2.jpg"],
          contractor: "Constructora 3",
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 4,
          name: "Nombre 4",
          location: "Ciudad 4",
          year: "Año 4",
          pictures: ["eladio-1.jpg","eladio-2.jpg"],
          contractor: "Constructora 4",
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 5,
          name: "Nombre 5",
          location: "Ciudad 5",
          year: "Año 5",
          pictures: ["eladio-1.jpg","eladio-2.jpg"],
          contractor: "Constructora 5",
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
