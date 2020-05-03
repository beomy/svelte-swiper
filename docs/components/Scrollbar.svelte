<script>
import { Swiper, SwiperSlide } from '../../src';
export let className;

const options = {
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
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

  <!-- Add Scrollbar -->
  <div class="swiper-scrollbar" slot="scrollbar"></div>
</Swiper>
