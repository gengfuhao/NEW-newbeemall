const url = "http://localhost:3000/goods/detail/review/rating/";
const headers = { Accept: "application/json" };

export default {
  state: {
    reviewRating: {},
  },
  mutations: {
    //syncrous
    setReviewRating(state, payload) {
      //state.reviewRating.push(...payload);
      //state.reviewRating = payload
      state.reviewRating = payload[0];
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setReviewRating(state, payload) {
      const reviewRating = await fetch(url + payload, { headers });
      const j = await reviewRating.json();
      state.commit("setReviewRating", j);
      console.log("in setReviewRating method", j);
    },
  },
  getters: {
    getReviewRating: (state) => {
      console.log("in getReviewRating method", state.reviewRating);
      console.log(state.reviewRating);
      return state.reviewRating;
    },
  },
};
