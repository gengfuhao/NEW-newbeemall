const url = "http://localhost:3000/newGoodses";
const headers = { Accept: "application/json" };

export default {
  state: {
    newGoodses: [],
    day: { years: [], year: new Date().getFullYear(), month: 0, day: 1 },
  },
  mutations: {
    //syncrous
    setNewGoods(state, payload) {
      state.newGoodses.push(...payload);
      console.log("array push ", payload);
    },

    //hot goods
  },
  actions: {
    //asyncronous
    async setNewGoodses(state) {
      const goodses = await fetch(url, { headers });
      const j = await goodses.json();
      state.commit("setNewGoods", j);
      console.log("in setNewGoodses method", j);
    },

    //hot goods fetch method
  },
  modules: {},
  getters: {
    getNewGoodses: (state) => {
      console.log("in getNewGoodses method", state.newGoodses);
      console.log(state.newGoodses);
      return state.newGoodses;
    },

    // hot goods getter
  },
};
