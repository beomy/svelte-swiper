<script>
import { Swiper, SwiperSlide } from '../../dist/bundle';

const options = {
  // Enable lazy loading
  lazy: true,
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

<Swiper className="lazy-load-images" {options}>
  <SwiperSlide>
    <!-- Required swiper-lazy class and image source specified in data-src attribute -->
    <img data-src="https://swiperjs.com/demos/images/nature-1.jpg" class="swiper-lazy" alt="">
    <!-- Preloader image -->
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </SwiperSlide>
  <SwiperSlide>
    <img data-src="https://swiperjs.com/demos/images/nature-2.jpg" class="swiper-lazy" alt="">
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </SwiperSlide>
  <SwiperSlide>
    <img data-src="https://swiperjs.com/demos/images/nature-3.jpg" class="swiper-lazy" alt="">
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </SwiperSlide>
  <SwiperSlide>
    <img data-src="https://swiperjs.com/demos/images/nature-4.jpg" class="swiper-lazy" alt="">
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </SwiperSlide>
  <SwiperSlide>
    <img data-src="https://swiperjs.com/demos/images/nature-5.jpg" class="swiper-lazy" alt="">
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </SwiperSlide>
  <SwiperSlide>
    <img data-src="https://swiperjs.com/demos/images/nature-6.jpg" class="swiper-lazy" alt="">
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </SwiperSlide>

  <!-- Add Pagination -->
  <div class="swiper-pagination" slot="pagination"></div>
  <!-- Add Arrows -->
  <div class="swiper-button-next" slot="button-next"></div>
  <div class="swiper-button-prev" slot="button-prev"></div>
</Swiper>


<style lang="scss" global>
  .lazy-load-images {
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #000;
    }
    .swiper-slide img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      -ms-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      position: absolute;
      left: 50%;
      top: 50%;
    }
  }
</style>