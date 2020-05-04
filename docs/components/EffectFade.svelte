<script>
import { Swiper, SwiperSlide } from '../../src';

const options = {
  spaceBetween: 30,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}
</script>

<Swiper className="effect-fade" {options}>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-1.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-2.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-3.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-4.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-5.jpg)"></SwiperSlide>

  <!-- Add Pagination -->
  <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
  <!-- Add Arrows -->
  <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
</Swiper>

<style lang="scss" global>
  .effect-fade {
    .swiper-slide {
      background-position: center;
      background-size: cover;
    }
  }
</style>
