<template>
  <div class="all-sort-list">
    <div
      class="item"
      @mouseover.self="mouseOverFun($event)"
      @mouseleave.self="mouseLeaveFun($event)"
      v-for="(levelOneCat, index1) in categories"
      :key="index1"
    >
      <h3>
        <span>·</span><a href="##">{{ levelOneCat.categoryName }}</a>
      </h3>
      <div class="item-list clearfix" :style="{ top: '0px' }">
        <div class="subitem">
          <cate-subitem :categories2="levelOneCat.categories"></cate-subitem>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CateSubitem from "./CateSubitem.vue";
import { onMounted, computed } from "vue";
// import { mapActions, mapGetters } from "vuex";
import { useStore } from "vuex";

const store = useStore();
onMounted(() => {
  store.dispatch("setCategories");
});
let categories = computed(() => store.getters.getCategories);

// const state = reactive({
//   // controll item list show or not
//   displayOrNot: "none",
// });
//let { displayOrNot } = toRefs(state);

//鼠标放上去(mouseOver),显示第二三级别(display = "block")，
const mouseOverFun = (event) => {
  // console.log("event", event.target);
  let style = "top:" + event.target.offsetTop + "px; display:block";
  event.target.querySelector(".item-list").style = style;
};
//鼠标拿开(mouseLeave),消失(display = "none")
const mouseLeaveFun = (event) => {
  console.log("event", event);
  event.target.querySelector(".item-list").style.display = "none";
};
</script>

<style>
.all-sort-list {
  position: relative;
  float: left;
  width: 228px;
  border-top: none;
  background: #000;
  height: 100%;
  margin-left: 30px;
}
.all-sort-list .item {
  height: 49px;
  border-top: 1px solid #ffffff;
  padding-left: 10px;
}
.all-sort-list .item.bo {
  border-top: none;
}
.all-sort-list .item h3 {
  /* height: 30px;
    line-height: 45px; */
  font-size: 15px;
  font-weight: normal;
  width: 199px;
  overflow: hidden;
  text-align: left;
}
.all-sort-list .item span {
  padding: 0px 5px;
  color: #1baeae;
  font-family: "\5B8B\4F53";
}
.all-sort-list .item a {
  color: #fff;
  text-decoration: none;
}
.all-sort-list .item a:hover {
  font-weight: bold;
  color: #1baeae;
}
.all-sort-list .item-list {
  display: none;
  position: absolute;
  width: 495px;
  min-height: 200px;
  _height: 200px;
  background: #fff;
  left: 210px;
  box-shadow: 0px 0px 10px #dddddd;
  border: 1px solid #ddd;
  top: 3px;
  z-index: 10;
}
.item-list .subitem {
  float: left;
  width: 477px;
  padding: 0px 4px 0px 8px;
}
.item-list .subitem dl {
  border-top: 1px solid #eee;
  padding: 6px 0px;
  overflow: hidden;
  zoom: 1;
}
.item-list .subitem .fore1 {
  border-top: none;
}
.item-list .subitem dt {
  float: left;
  width: 84px;
  line-height: 20px;
  text-align: left;
  padding: 3px 6px 0px 0px;
  font-weight: 700;
  color: #1baeae;
}
.item-list .subitem dt a {
  color: #1baeae;
  text-decoration: underline;
}
.item-list .subitem dd {
  float: left;
  width: 415px;
  padding: 3px 0px 0px;
  overflow: hidden;
}
.item-list .subitem dd em {
  float: left;
  height: 14px;
  line-height: 14px;
  padding: 0px 8px;
  margin-top: 5px;
  border-left: 1px solid #ccc;
}
.item-list .subitem dd em a,
.item-list .cat-right dd a {
  color: #666;
  text-decoration: none;
}
.item-list .subitem dd em a:hover,
.item-list .cat-right dd a:hover {
  font-weight: normal;
  text-decoration: underline;
}
</style>
