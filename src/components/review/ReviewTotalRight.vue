<template>
  <div class="p-reviw-graph-area-right">
    <div class="g-lg-flow-sm p-reviw-graph-area-row-sm">
      <div class="g-score p-reviw-graph-area-score">
        <span data-score="5.0"
          ><span class="g-clip">{{ 5 }}</span></span
        >
      </div>
      <div class="a-meter g-mater-visble" id="js-mater5" data-rate="5">
        <div class="a-meter-bar" style="width: 49%"></div>
      </div>
      <a
        class="g-link g-link-visble"
        id="js-rate5"
        data-rate="5"
        title="レビューの49％に星5つが付いています。"
        data-clickable=""
        >{{ ratingCount }}人</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.p-reviw-graph-area {
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 10px 5px 10px;
  text-align: center;
  vertical-align: top;
}
.p-reviw-graph-area-left-row {
  display: inline-block;
  margin: 0px 0;
}
.p-reviw-graph-area-comp-eva {
  font-weight: bold;
}
.p-reviw-graph-area-average span {
  font-size: 26px;
  color: #eb6157;
}

.p-reviw-graph-area-foot {
  text-align: center;
  margin-top: -12px !important;
  margin-bottom: 12px;
}
</style>
