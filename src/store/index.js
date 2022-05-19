import { createStore } from "vuex";

const newUrl = "http://localhost:3000/newGoodses";
//const hotUrl = "http://localhost:3000/hotGoodses";
const headers = { Accept: "application/josn" };

export default createStore({
  state: {
    newGoodses: [],
    hotGoodses: [],
  },
  mutations: {
    //new goods
    setNewGoods(state, payload) {
      state.newGoodses.push(...payload);
      console.log("array push", payload);
    },
    //hot goods
    // setHotGoods(state, payload) {
    //   state.hotGoodses.push(...payload);
    //   console.log("array push", payload);
    // },
  },
  //new goods
  actions: {
    async setNewGoodses(state) {
      const goodses = await fetch(newUrl, { headers });
      const j = await goodses.json();
      state.commit("setNewGoods", j);
      console.log("in setNewGoodses method", j);
    },
    //hot goods
    // async setHotGoodses(state) {
    //   const goodses = await fetch(hotUrl, { headers });
    //   const j = await goodses.json();
    //   state.commit("setHotGoods", j);
    //   console.log("in setHotGoodses method", j);
    // },
  },
  modules: {},
  //new goods
  getters: {
    getNewGoodses: (state) => {
      console.log("in getNewGoodses method", state.newGoodses);
      console.log(state.newGoodses);
      return state.newGoodses;
    },
    //hot goods
    // getHotGoodses: (state) => {
    //   console.log("in getHotGoodses method", state.hotGoodses);
    //   console.log(state.hotGoodses);
    //   return state.hotGoodses;
    // },
  },
});
