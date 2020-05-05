<script>
import { Swiper, SwiperSlide } from '../../dist/bundle';

const options = {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination',
  },
}
</script>

<div class="effect-cube">
  <Swiper {options}>
    <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-1.jpg)"></SwiperSlide>
    <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-2.jpg)"></SwiperSlide>
    <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-3.jpg)"></SwiperSlide>
    <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-4.jpg)"></SwiperSlide>
    <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-5.jpg)"></SwiperSlide>

    <!-- Add Pagination -->
    <div class="swiper-pagination" slot="pagination"></div>
  </Swiper>
</div>

<style lang="scss" global>
  .effect-cube {
    position: relative;

    .swiper-container {
      width: 300px;
      height: 300px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -150px;
      margin-top: 50px;
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
    }
  }
</style>
