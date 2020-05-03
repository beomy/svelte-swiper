<script>
import { Swiper, SwiperSlide } from '../../src';
export let className;

const options = {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
}
</script>

<Swiper {className} {options}>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
  <SwiperSlide>Slide 5</SwiperSlide>
  <SwiperSlide>Slide 6</SwiperSlide>
  <SwiperSlide>Slide 7</SwiperSlide>
  <SwiperSlide>Slide 8</SwiperSlide>
  <SwiperSlide>Slide 9</SwiperSlide>
  <SwiperSlide>Slide 10</SwiperSlide>

  <!-- Add Pagination -->
  <div class="swiper-pagination" slot="pagination"></div>
</Swiper>

<style lang="scss" global>
  .centered-auto {
    .swiper-slide {
      width: 60%;
    }
    .swiper-slide:nth-child(2n) {
      width: 40%;
    }
    .swiper-slide:nth-child(3n) {
      width: 20%;
    }
  }
</style>
