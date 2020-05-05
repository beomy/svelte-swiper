<script>
import { Swiper, SwiperSlide } from '../../dist/bundle';

const options = {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
}
</script>

<Swiper className="effect-coverflow" {options}>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-1.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-2.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-3.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-4.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-5.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-6.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-7.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-8.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-9.jpg)"></SwiperSlide>
  <SwiperSlide style="background-image:url(https://swiperjs.com/demos/images/nature-10.jpg)"></SwiperSlide>

  <!-- Add Pagination -->
  <div class="swiper-pagination" slot="pagination"></div>
</Swiper>

<style lang="scss" global>
  .effect-coverflow {
    &.swiper-container {
      width: 100%;
      padding-top: 50px;
      padding-bottom: 50px;
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
      height: 300px;
    }
  }
</style>
