const url = "http://localhost:3000/reviews";
const headers = { Accept: "application/json" };

export default {
  state: {
    reviews: [],
  },
  mutations: {
    //syncrous
    setReviews(state, payload) {
      state.reviews.push(...payload);
      //state.reviews = payload
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setReviews(state) {
      const reviews = await fetch(url, { headers });
      const j = await reviews.json();
      state.commit("setReviews", j);
      console.log("in setReviews method", j);
    },
  },
  getters: {
    getReviews: (state) => {
      console.log("in getReviews method", state.reviews);
      console.log(state.reviews);
      return state.reviews;
    },
  },
};
