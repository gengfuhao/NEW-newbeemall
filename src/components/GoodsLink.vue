<template>
  <a
    class="goods-link"
    :href="link"
    @mouseover="mouseover"
    @mouseleave="showComment = false"
  >
    <div class="info_discount">{{ title }}</div>
    <img :src="imgSrc" :alt="name" />
    <p class="name">{{ name }}</p>
    <p class="item_price">{{ price }}</p>
    <!-- <p class="counter">{{ counter }}</p> -->
    <transition name="slide-up">
      <div v-if="showComment" class="comment">
        <p>{{ comment }}</p>
        <p></p>
      </div>
    </transition>
  </a>
</template>

<script>
export default {
  data() {
    return {
      showComment: false,
    };
  },
  props: {
    link: String,
    title: String,
    imgSrc: String,
    name: String,
    price: Number,
    counter: String,
    comment: String,
  },
  methods: {
    mouseover() {
      if (this.comment) {
        this.showComment = true;
      }
    },
  },
};
</script>

<style scoped>
.goods-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: none;
  text-decoration: none;
  color: #000;
}

.goods-link img {
  width: 160px;
  height: 160px;
  opacity: 0.8;
  margin: 37px;
}

.comment {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* transform: translateY(101%); */
  transition: transform 0.4s;
  box-sizing: border-box;
  height: 70px;
  padding: 10px 0 0 30px;
  background-color: #1baeae;
  color: #fff;
  text-align: left;
}

.slide-up-enter-active {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.slide-up-enter-to {
  opacity: 1;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: -translateY(101%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
</style>
