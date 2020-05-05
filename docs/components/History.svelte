<script>
import { Swiper, SwiperSlide } from '../../dist/bundle';

const options = {
  spaceBetween: 50,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  history: {
    key: 'slide',
  },
}
</script>

<Swiper {options}>
  <SwiperSlide history="1">Slide 1</SwiperSlide>
  <SwiperSlide history="slide 2">Slide 2</SwiperSlide>
  <SwiperSlide history="3">Slide 3</SwiperSlide>
  <SwiperSlide history="slide 4">Slide 4</SwiperSlide>
  <SwiperSlide history="5">Slide 5</SwiperSlide>
  <SwiperSlide history="slide 6">Slide 6</SwiperSlide>
  <SwiperSlide history="7">Slide 7</SwiperSlide>
  <SwiperSlide history="slide 8">Slide 8</SwiperSlide>
  <SwiperSlide history="9">Slide 9</SwiperSlide>
  <SwiperSlide history="slide 10">Slide 10</SwiperSlide>

  <!-- Add Pagination -->
  <div class="swiper-pagination" slot="pagination"></div>
  <!-- Add Arrows -->
  <div class="swiper-button-next" slot="button-next"></div>
  <div class="swiper-button-prev" slot="button-prev"></div>
</Swiper>
