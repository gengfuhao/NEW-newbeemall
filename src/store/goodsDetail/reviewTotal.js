const url = "http://localhost:3000/goods/detail/review/total/";
const headers = { Accept: "application/json" };

export default {
  state: {
    reviewTotal: {},
  },
  mutations: {
    //syncrous
    setReviewTotal(state, payload) {
      //state.reviewTotal.push(...payload);
      //state.reviewTotal = payload
      state.reviewTotal = payload[0];
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setReviewTotal(state, payload) {
      const reviewTotal = await fetch(url + payload, { headers });
      const j = await reviewTotal.json();
      state.commit("setReviewTotal", j);
      console.log("in setReviewTotal method", j);
    },
  },
  getters: {
    getReviewTotal: (state) => {
      console.log("in getReviewTotal method", state.reviewTotal);
      console.log(state.reviewTotal);
      return state.reviewTotal;
    },
  },
};
