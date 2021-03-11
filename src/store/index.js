import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActive: null,
    cover: [
      "2/eladio-2.jpg",
      "4/eladio-4.jpg",
      "5/eladio-1.jpg",
      "5/eladio-6.jpg"
    ],
    projects: [
      {
          id: 0,
          name: "Nombre 0",
          location: "Ciudad 0",
          year: "Año 0",
          pictures: ["1/eladio-1.jpg","1/eladio-2.jpg","1/eladio-3.jpg","1/eladio-4.jpg"],
          contractor: "Constructora 0",
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 1,
          name: "Nombre 1",
          location: "Ciudad 1",
          year: "Año 1",
          pictures: ["2/eladio-1.jpg","2/eladio-2.jpg","2/eladio-3.jpg","2/eladio-4.jpg"],
          contractor: "Constructora 1",
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 2,
          name: "Nombre 2",
          location: "Ciudad 2",
          year: "Año 2",
          pictures: ["3/eladio-1.jpg","3/eladio-2.jpg","3/eladio-3.jpg","3/eladio-4.jpg","3/eladio-5.jpg"],
          contractor: "Constructora 2",
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 3,
          name: "Nombre 3",
          location: "Ciudad 3",
          year: "Año 3",
          pictures: ["4/eladio-1.jpg","4/eladio-2.jpg","4/eladio-3.jpg","4/eladio-4.jpg","4/eladio-5.jpg","4/eladio-6.jpg","4/eladio-7.jpg","4/eladio-8.jpg"],
          contractor: "Constructora 3",
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 4,
          name: "Nombre 4",
          location: "Ciudad 4",
          year: "Año 4",
          pictures: ["5/eladio-1.jpg","5/eladio-2.jpg","5/eladio-3.jpg","5/eladio-4.jpg","5/eladio-5.jpg","5/eladio-6.jpg"],
          contractor: "Constructora 4",
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
          id: 5,
          name: "Nombre 5",
          location: "Ciudad 5",
          year: "Año 5",
          pictures: ["6/eladio-1.jpg","6/eladio-2.jpg","6/eladio-3.jpg","6/eladio-4.jpg","6/eladio-5.jpg"],
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
