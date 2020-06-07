<script>
import { Swiper, SwiperSlide } from 'svelte-swiper';

const options = {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
}
</script>

<Swiper className="pagination-custom" {options}>
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
  .pagination-custom {
    .swiper-pagination-bullet {
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      color:#000;
      opacity: 1;
      background: rgba(0,0,0,0.2);
    }
    .swiper-pagination-bullet-active {
      color:#fff;
      background: #007aff;
    }
  }
</style>
