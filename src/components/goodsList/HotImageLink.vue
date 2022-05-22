<template>
  <a :href="link"> <img :src="imgSrc" :alt="name" /></a>
</template>

<script>
export default {
  props: {
    link: String,
    imgSrc: String,
    name: String,
  },
  inheritAttrs: false,
};
</script>

<style scoped>
img {
  height: 250px;
  opacity: 0.8;
  margin: 10px;
}
</style>
