<template>
  <div id="sub_banner">
    <hot-image
      v-for="(goods, index) in state.hotGoods"
      :key="index"
      :goods="goods"
    ></hot-image>
  </div>
</template>

<script setup>
import HotImage from "./HotImage.vue";
import { reactive, onMounted } from "vue";
// export default {
//   components: { HotImage },
//   setup(props) {
//     console.log(props.title);
const state = reactive({
  hotGoods: [],
});
onMounted(async () => {
  const url = "http://localhost:3000/hotGoodses";
  const headers = { Accept: "application/json" };
  const goodses = await fetch(url, { headers });
  const j = await goodses.json();
  state.hotGoods = [...j];
  //       const newArr = j.map((goods) => {
  //         const { link, imgSrc, name } = goods;
  //         return { link, imgSrc, name };
});
//       state.hotGoods = [...newArr];
//       console.log("in setNewGoodses method", state.hotGoods);
//     });
//     return {
//       ...toRefs(state),
//     };
//   },
// };

// export default {
//   components: {
//     HotImage,
//   },
//   methods: {
//     ...mapActions({ fetchHotGoodses: "setHotGoodses" }),
//   },
//   computed: {
//     ...mapGetters({ goodsList: "getHotGoodses" }),
//   },
//   mounted() {
//     this.fetchHotGoodses();
//   },
// };
//
</script>

<style>
#sub_banner {
  display: flex;
  width: 1226px;
  flex-shrink: 0;
  justify-content: space-between;
  /* height: 295px; */
  margin-top: 15px;
  text-decoration: none;
  list-style-type: none;
  font-family: Microsoft Yahei;
  flex-wrap: wrap;
}
</style>
