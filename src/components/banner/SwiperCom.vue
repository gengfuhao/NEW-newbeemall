<template>
  <swiper
    class="swiper-container"
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :autoplay="{ autoplay: true }"
    loop
  >
    <swiper-slide class="slide" v-for="slide in slides" :key="slide">
      <a :href="slide.link"><img :alt="slide.title" :src="slide.imgSrc" /></a>
    </swiper-slide>
  </swiper>
</template>

<script>
// import Swiper core and required modules
//import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("setImages");
    });
    let slides = computed(() => store.getters.getImages);

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    let swiperOption = {
      initialSlide: 1,
    };
    return {
      slides,
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
      swiperOption,
    };
  },
};
</script>
<style scoped>
.swiper-container {
  --swiper-theme-color: #ff6600;
  --swiper-navigation-size: 50px; /* 设置按钮大小 */
}
img {
  width: 100%;
}
</style>
