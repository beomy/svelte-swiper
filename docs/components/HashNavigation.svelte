<script>
import { Swiper, SwiperSlide } from '../../dist/bundle';

const options = {
  spaceBetween: 30,
  hashNavigation: {
    watchState: true,
  },
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

<Swiper {options}>
  <SwiperSlide hash="slide1">Slide 1</SwiperSlide>
  <SwiperSlide hash="slide2">Slide 2</SwiperSlide>
  <SwiperSlide hash="slide3">Slide 3</SwiperSlide>
  <SwiperSlide hash="slide4">Slide 4</SwiperSlide>
  <SwiperSlide hash="slide5">Slide 5</SwiperSlide>
  <SwiperSlide hash="slide6">Slide 6</SwiperSlide>
  <SwiperSlide hash="slide7">Slide 7</SwiperSlide>
  <SwiperSlide hash="slide8">Slide 8</SwiperSlide>
  <SwiperSlide hash="slide9">Slide 9</SwiperSlide>
  <SwiperSlide hash="slide10">Slide 10</SwiperSlide>

  <!-- Add Pagination -->
  <div class="swiper-pagination" slot="pagination"></div>
  <!-- Add Arrows -->
  <div class="swiper-button-next" slot="button-next"></div>
  <div class="swiper-button-prev" slot="button-prev"></div>
</Swiper>
