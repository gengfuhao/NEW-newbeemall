const url = "http://localhost:3000/swiper";
const headers = { Accept: "application/json" };

export default {
  state: {
    images: [],
  },
  mutations: {
    //syncrous
    setImages(state, payload) {
      state.images.push(...payload);
      //state.images = payload
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setImages(state) {
      const images = await fetch(url, { headers });
      const j = await images.json();
      state.commit("setImages", j);
      console.log("in setImages method", j);
    },
  },
  getters: {
    getImages: (state) => {
      console.log("in getImages method", state.images);
      console.log(state.images);
      return state.images;
    },
  },
};
