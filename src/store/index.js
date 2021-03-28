import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActive: null,
    burger: true,
    caseIndex: 0,
    scroll: null,
    text1: "Experiencia arquitectónica gratificante.",
    text2: "",
    cover: [
      "6/eladio-1.jpg",
      "4/eladio-4.jpg",
      "8/eladio-3.jpg",
      "10/eladio-3.jpg",
      "13/eladio-2.jpg"
    ],
    projects: [
      {
          id: 0,
          name: "Casa Cristal Ortega",
          location: "Playa Hermosa, Puerto Varas",
          pictures: ["1/eladio-2.jpg","1/eladio-1.jpg","1/eladio-3.jpg","1/eladio-4.jpg"],
          display: ["display/1/eladio50_1.jpg","display/1/eladio50_2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
          id: 1,
          name: "Casa Fuji",
          location: "Puerto Varas",
          pictures: ["2/eladio-3.jpg","2/eladio-1.jpg","2/eladio-2.jpg","2/eladio-4.jpg"],
          display: ["display/2/eladio50_1.jpg","display/2/eladio50_2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
          id: 2,
          name: "Casa Galería",
          location: "Puerto Varas",
          pictures: ["3/eladio-3.jpg","3/eladio-1.jpg","3/eladio-2.jpg","3/eladio-4.jpg","3/eladio-5.jpg"],
          display: ["display/3/eladio-1.jpg","display/3/eladio-2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
          id: 3,
          name: "Cabaña Almabosque",
          location: "Puerto Varas",
          pictures: ["4/eladio-1.jpg","4/eladio-2.jpg","4/eladio-3.jpg","4/eladio-4.jpg","4/eladio-5.jpg","4/eladio-6.jpg","4/eladio-7.jpg","4/eladio-8.jpg"],
          display: ["display/4/eladio50-1.jpg","display/4/eladio50-2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
          id: 4,
          name: "Hotel Kalfu",
          location: "Puerto Varas",
          pictures: ["5/eladio-1.jpg","5/eladio-2.jpg","5/eladio-3.jpg"],
          display: ["display/5/eladio50-1.jpg","display/5/eladio50-2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
          id: 5,
          name: "Casa Riscos",
          location: "Puerto Varas",
          pictures: ["6/eladio-6.jpg","6/eladio-1.jpg","6/eladio-2.jpg","6/eladio-3.jpg","6/eladio-4.jpg","6/eladio-5.jpg"],
          display: ["display/6/eladio50-1.jpg","display/6/eladio50-2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
          id: 6,
          name: "Espacio Recepción",
          location: "Parque Nacional Vicente Pérez Rosales, Saltos del Petrohué",
          pictures: ["7/eladio-3.jpg","7/eladio-1.jpg","7/eladio-2.jpg","7/eladio-4.jpg"],
          display: ["display/7/eladio50-1.jpg","display/7/eladio50-2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
          id: 7,
          name: "Casa Marina",
          location: "Zapallar",
          pictures: ["8/eladio-1.jpg","8/eladio-2.jpg","8/eladio-3.jpg","8/eladio-4.jpg","8/eladio-5.jpg","8/eladio-6.jpg","8/eladio-7.jpg","8/eladio-8.jpg"],
          display: ["display/8/eladio50-1.jpg","display/8/eladio50-2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
          id: 8,
          name: "Museo Familia Schirmer",
          location: "Saltos del Petrohué",
          pictures: ["9/eladio-2.jpg","9/eladio-1.jpg"],
          display: ["display/9/eladio50-1.jpg","display/9/eladio50-2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
          id: 9,
          name: "Casa Jofré",
          location: "Molino Viejo, Llanquihue",
          pictures: ["10/eladio-1.jpg","10/eladio-2.jpg","10/eladio-3.jpg"],
          display: ["display/10/eladio50-1.jpg","display/10/eladio50-2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
          id: 10,
          name: "Ala Sur Clínica Alemana",
          location: "Puerto Varas (Asociado a G. Greene Arquitecto)",
          pictures: ["11/eladio-1.jpg","11/eladio-2.jpg","11/eladio-3.jpg","11/eladio-4.jpg"],
          display: ["display/11/eladio50-1.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
          id: 11,
          name: "Casa Cangrejo",
          location: "Parque Ivian, Puerto Varas",
          pictures: ["12/eladio-1.jpg","12/eladio-2.jpg","12/eladio-3.jpg","12/eladio-4.jpg"],
          display: ["display/12/eladio50-1.jpg","display/12/eladio50-2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
          id: 12,
          name: "Casa Cea",
          location: "Sector La Fábrica, Puerto Varas",
          pictures: ["13/eladio-1.jpg","13/eladio-2.jpg","13/eladio-3.jpg"],
          display: ["display/13/eladio50-1.jpg","display/13/eladio50-2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
          id: 13,
          name: "Casa J. Ackarson",
          location: "Puerto Varas",
          pictures: ["14/eladio-2.jpg","14/eladio-1.jpg","14/eladio-3.jpg"],
          display: ["display/14/eladio50-1.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
          id: 14,
          name: "Dibujos",
          pictures: ["15/eladio-1.jpg","15/eladio-2.jpg","15/eladio-3.jpg","15/eladio-4.jpg","15/eladio-5.jpg","15/eladio-6.jpg","15/eladio-7.jpg","15/eladio-8.jpg","15/eladio-9.jpg"],
          display: ["display/15/eladio50-1.jpg","display/15/eladio50-2.jpg"],
          description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ]
  },

  mutations: {
    header(state, res){
      state.isActive = res;
    },
    burger(state, res){
      state.burger = res;
    },
    scrolling(state, res){
      state.scroll = res;
    },
    caseIndex(state, res){
      state.caseIndex = res;
    }
  },
  actions: {
  },
  modules: {
  }
})
