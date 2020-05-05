<script>
import { Swiper, SwiperSlide } from '../../src';

const options = {
  zoom: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}
</script>

<Swiper className="zoom" {options}>
  <SwiperSlide>
    <div class="swiper-zoom-container">
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="">
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="swiper-zoom-container">
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="">
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="swiper-zoom-container">
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="">
    </div>
  </SwiperSlide>

  <!-- Add Pagination -->
  <div class="swiper-pagination" slot="pagination"></div>
  <!-- Add Arrows -->
  <div class="swiper-button-next" slot="button-next"></div>
  <div class="swiper-button-prev" slot="button-prev"></div>
</Swiper>

<style lang="scss" global>
  .zoom {
    background-color: #000;
    .swiper-slide {
      background: transparent;
      overflow: hidden;
    }
  }
</style>
