<script>
import { Swiper, SwiperSlide } from '../../dist/bundle';

const options = {
  autoHeight: true, //enable auto height
  spaceBetween: 20,
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

<Swiper className="auto-height" {options}>
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
  <!-- Add Arrows -->
  <div class="swiper-button-next" slot="button-next"></div>
  <div class="swiper-button-prev" slot="button-prev"></div>
</Swiper>

<style lang="scss" global>
  .auto-height {
    &.swiper-container {
      width: 100%;
      height: auto;
    }
    &.swiper-container .swiper-slide {
      height: 300px;
      line-height: 300px;
    }
    &.swiper-container .swiper-slide:nth-child(2n) {
      height: 400px;
      line-height: 400px;
    }
  }
</style>
