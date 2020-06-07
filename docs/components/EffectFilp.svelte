<script>
import { Swiper, SwiperSlide } from 'svelte-swiper';

const options = {
  effect: 'flip',
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}
</script>

<Swiper className="effect-flip" {options}>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-1.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-2.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-3.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-4.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-5.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-6.jpg)"></SwiperSlide>

  <!-- Add Pagination -->
  <div class="swiper-pagination" slot="pagination"></div>

  <!-- Add Arrows -->
  <div class="swiper-button-prev" slot="button-prev"></div>
  <div class="swiper-button-next" slot="button-next"></div>
</Swiper>

<style lang="scss" global>
  .effect-flip {
    &.swiper-container {
      width: 300px;
      height: 300px;
      padding: 50px;
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
      height: 300px;
    }
  }
</style>
