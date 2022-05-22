import { createStore } from "vuex";
import category from "./home/categories";
import newgoods from "./home/newgoods";
import swiper from "./home/swiper";
import reviews from "./goodsDetail/reviews";

export default createStore({
  modules: {
    category,
    newgoods,
    swiper,
    reviews,
  },
});
