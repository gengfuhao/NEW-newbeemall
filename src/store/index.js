import { createStore } from "vuex";
import category from "./home/categories";
import newgoods from "./home/newgoods";

export default createStore({
  modules: {
    category,
    newgoods,
  },
});
