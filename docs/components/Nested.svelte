<script>
import { Swiper, SwiperSlide } from '../../dist/bundle';

const optionsH = {
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination-h',
    clickable: true,
  },
}

const optionsV = {
  direction: 'vertical',
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination-v',
    clickable: true,
  },
}
</script>

<Swiper className="swiper-container-h" options={optionsH}>
  <SwiperSlide>Horizontal Slide 1</SwiperSlide>
  <SwiperSlide>
    <Swiper className="swiper-container-v" options={optionsV}>
      <SwiperSlide>Vertical Slide 1</SwiperSlide>
      <SwiperSlide>Vertical Slide 2</SwiperSlide>
      <SwiperSlide>Vertical Slide 3</SwiperSlide>
      <SwiperSlide>Vertical Slide 4</SwiperSlide>
      <SwiperSlide>Vertical Slide 5</SwiperSlide>
      <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
    </Swiper>
  </SwiperSlide>
  <SwiperSlide>Horizontal Slide 3</SwiperSlide>
  <SwiperSlide>Horizontal Slide 4</SwiperSlide>
  <!-- Add Pagination -->
  <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
</Swiper>

<style lang="scss" global>
  .swiper-container-v {
    background: #eee;
  }
</style>
