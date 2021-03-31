import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActive: null,
    burger: true,
    caseIndex: 0,
    scroll: null,
    text1: "Las obras de Eladio surgen de un profundo conocimiento de las necesidades, expectativas y comprensión de los sueños que persiguen las personas que habitarán el espacio. Un proceso hiperpersonalizado que da como resultado diseños de inconfundible personalidad escénica.",
    text2: "Características de su trabajo son el aprovechamiento máximo de las virtudes del lugar de emplazamiento, la orientación que pone en escena la luz natural. Una estética que busca el placer de habitar.",
    text3: "“Tomo cada proyecto como si fuese un sastre, un proyecto a medida. La exactitud de un sastre en el diseño de un espacio”",
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
          description1: "Pensada como un espacio habitacional transparente que vive el acantilado del Lago Llanquihue como acto permanente.",
      },
      {
          id: 1,
          name: "Casa Fuji",
          location: "Puerto Varas",
          pictures: ["2/eladio-3.jpg","2/eladio-1.jpg","2/eladio-2.jpg","2/eladio-4.jpg"],
          display: ["display/2/eladio50_1.jpg","display/2/eladio50_2.jpg"],
          description1: "",
          description2: ""
      },
      {
          id: 2,
          name: "Casa Spaguetti",
          location: "Puerto Varas",
          pictures: ["3/eladio-3.jpg","3/eladio-1.jpg","3/eladio-2.jpg","3/eladio-4.jpg","3/eladio-5.jpg"],
          display: ["display/3/eladio-1.jpg","display/3/eladio-2.jpg"],
          description1: "Protagonizada por su galería techada norte, que permite la convivencia exterior en un clima lluvioso, cuenta con espacios interiores amplios, luminosos y cálidos.",
          description2: ""
      },
      {
          id: 3,
          name: "Cabaña Alma Bosque",
          location: "Puerto Varas",
          pictures: ["4/eladio-1.jpg","4/eladio-2.jpg","4/eladio-3.jpg","4/eladio-4.jpg","4/eladio-5.jpg","4/eladio-6.jpg","4/eladio-7.jpg","4/eladio-8.jpg"],
          display: ["display/4/eladio50-1.jpg","display/4/eladio50-2.jpg"],
          description1: "Cabañas palafito encajadas de manera orgánica en un bosque urbano de mínimo contacto con el suelo del bosque, fundiéndose entre las copas de los árboles que integran también el espacio de terrazas.",
          description2: ""
      },
      {
          id: 4,
          name: "Hotel Kalfu",
          location: "Puerto Varas",
          pictures: ["5/eladio-1.jpg","5/eladio-2.jpg","5/eladio-3.jpg"],
          display: ["display/5/eladio50-1.jpg","display/5/eladio50-2.jpg"],
          description1: "Resultado de la recuperación de una casa histórica alemana a la cual fue adicionada una lúdica torre de muros en diagonal que configuran un diseño piramidal, alivianando el volúmen y ofreciendo una lectura estructural refinada.",
          description2: ""
      },
      {
          id: 5,
          name: "Casa Riscos",
          location: "Puerto Varas",
          pictures: ["6/eladio-6.jpg","6/eladio-1.jpg","6/eladio-2.jpg","6/eladio-3.jpg","6/eladio-4.jpg","6/eladio-5.jpg"],
          display: ["display/6/eladio50-1.jpg","display/6/eladio50-2.jpg"],
          description1: "Casa emplazada camino a Ensenada, de piedra y cristal, muy fornida para enfrentar las inclemencias de la lluvia norte.",
          description2: "Constituida por una galería que mira al Lago Llanquihue y que incorpora al Volcán Osorno al escenario interior."
      },
      {
          id: 6,
          name: "Espacio Recepción",
          location: "Parque Nacional Vicente Pérez Rosales, Saltos del Petrohué",
          pictures: ["7/eladio-3.jpg","7/eladio-1.jpg","7/eladio-2.jpg","7/eladio-4.jpg"],
          display: ["display/7/eladio50-1.jpg","display/7/eladio50-2.jpg"],
          description1: "Gran espacio que por su materialidad exalta la abundancia natural del parque. Diseñado para acoger a los visitantes y concebido como una bóveda central sustentado de grandes pilares de madera de roble. Su suelo de piedras permite que el flujo de la agua, mientras que su orientación hace que la luz norte domine el interior.",
          description2: "El espacio contiene un gran living, cafetería, tiendas y el acceso general al parque."
      },
      {
          id: 7,
          name: "Casa Marina",
          location: "Zapallar",
          pictures: ["8/eladio-1.jpg","8/eladio-2.jpg","8/eladio-3.jpg","8/eladio-4.jpg","8/eladio-5.jpg","8/eladio-6.jpg","8/eladio-7.jpg","8/eladio-8.jpg"],
          display: ["display/8/eladio50-1.jpg","display/8/eladio50-2.jpg"],
          description1: "Incorporada al hábitat natural de la roca, imitando su color, y con forma de almeja sujetada a la roca costera, contempla el eterno romper de las olas. Su curvatura asemeja el puente de mando de un barco.",
          description2: ""
      },
      {
          id: 8,
          name: "Museo Familia Schirmer",
          location: "Saltos del Petrohué",
          pictures: ["9/eladio-2.jpg","9/eladio-1.jpg"],
          display: ["display/9/eladio50-1.jpg","display/9/eladio50-2.jpg"],
          description1: "Tributo a las dos familias protagonistas de la colonización del Lago Todos Los Santos. Sus espacios interiores se concibieron abovedados con gran capacidad y aire, en ellos se exhiben los primeros barcos utilizados para explorar el lago, el primer andarivel de Chile-Argentina y otras reliquias preciadas del asentamiento.",
          description2: ""
      },
      {
          id: 9,
          name: "Casa Jofré",
          location: "Molino Viejo, Llanquihue",
          pictures: ["10/eladio-1.jpg","10/eladio-2.jpg","10/eladio-3.jpg"],
          display: ["display/10/eladio50-1.jpg","display/10/eladio50-2.jpg"],
          description1: "Réplica de una casa alemana que ofrece una vista monumental del Lago Llanquihue y la cordillera patagónica, cuya gran caja escala interior curva de triple altura une los espacios de una familia numerosa conservando la privacidad, iluminación y convivencia armónica.",
          description2: ""
      },
      {
          id: 10,
          name: "Ala Sur Clínica Alemana",
          location: "Puerto Varas (Asociado a G. Greene Arquitecto)",
          pictures: ["11/eladio-1.jpg","11/eladio-2.jpg","11/eladio-3.jpg","11/eladio-4.jpg"],
          display: ["display/11/eladio50-1.jpg"],
          description1: "",
          description2: ""
      },
      {
          id: 11,
          name: "Casa Cangrejo",
          location: "Parque Ivian, Puerto Varas",
          pictures: ["12/eladio-1.jpg","12/eladio-2.jpg","12/eladio-3.jpg","12/eladio-4.jpg"],
          display: ["display/12/eladio50-1.jpg","display/12/eladio50-2.jpg"],
          description1: "El diseño de estas casas surge espontáneamente. Su forma de cangrejo logra salientes de vista sorpresivas que ofrecen distintos ángulos del Lago Llanquihue y vistas laterales al volcán Calbuco.",
          description2: "Consiste en dos unidades habitacionales distintas, que unidas a un volumen común permite la optimización de la habitabilidad del terreno."
      },
      {
          id: 12,
          name: "Casa Cea",
          location: "Sector La Fábrica, Puerto Varas",
          pictures: ["13/eladio-1.jpg","13/eladio-2.jpg","13/eladio-3.jpg"],
          display: ["display/13/eladio50-1.jpg","display/13/eladio50-2.jpg"],
          description1: "Como una coronación del peñón donde está emplazada, exacerbada por su torreón, se erige como casa-mirador, que domina el paisaje y presenta múltiples vistas combinadas de los volcanes Calbuco, Osorno y el Lago Llanquihue.",
          description2: ""
      },
      {
          id: 13,
          name: "Casa J. Ackarson",
          location: "Puerto Varas",
          pictures: ["14/eladio-2.jpg","14/eladio-1.jpg","14/eladio-3.jpg"],
          display: ["display/14/eladio50-1.jpg"],
          description1: "Singular encargo de Jimmy Ackerson, amante del Ski, quien sugirió crear atmósferas de refugio. Esta casa emplazada en Camino Ensenada tiene todos sus espacios interiores incorporados con el mínimo de divisiones y puertas, facilitando así el encuentro, la conversación y la integración entre las personas que la habitan.",
          description2: ""
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
