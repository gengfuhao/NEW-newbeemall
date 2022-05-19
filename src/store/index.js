import { createStore } from "vuex";

const url = "http://localhost:3000/hotGoodses";
const headers = { Accept: "application/josn" };

export default createStore({
  state: {
    newGoodses: [],
  },
  mutations: {
    setNewGoods(state, payload) {
      state.newGoodses.push(...payload);
      console.log("array push", payload);
    },
  },
  actions: {
    async setNewGoodses(state) {
      const goodses = await fetch(url, { headers });
      const j = await goodses.json();
      state.commit("setNewGoods", j);
      console.log("in setNewGoodses method", j);
    },
  },
  modules: {},
  getters: {
    getNewGoodses: (state) => {
      console.log("in getNewGoodses method", state.newGoodses);
      console.log(state.newGoodses);
      return state.newGoodses;
    },
  },
});
