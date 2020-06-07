<script>
import { Swiper, SwiperSlide } from 'svelte-swiper';

let swiper;

const options = {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
}

function getDirection() {
  const windowWidth = window.innerWidth;
  const direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}
</script>

<Swiper
  className="change-direction"
  bind:swiper={swiper}
  {options}
  on:resize={() => swiper.changeDirection(getDirection())}
>
  <SwiperSlide>Resize me!</SwiperSlide>
  <SwiperSlide>Resize me!</SwiperSlide>
  <SwiperSlide>Resize me!</SwiperSlide>
  <SwiperSlide>Resize me!</SwiperSlide>
  <SwiperSlide>Resize me!</SwiperSlide>
  <SwiperSlide>Resize me!</SwiperSlide>
  <SwiperSlide>Resize me!</SwiperSlide>
  <SwiperSlide>Resize me!</SwiperSlide>
  <SwiperSlide>Resize me!</SwiperSlide>
  <SwiperSlide>Resize me!</SwiperSlide>

  <!-- Add Pagination -->
  <div class="swiper-button-next" slot="button-next"></div>
  <div class="swiper-button-prev" slot="button-prev"></div>
</Swiper>

<style lang="scss" global>
@media (max-width: 760px) {
  .change-direction {
    .swiper-button-next {
      right: 20px;
      transform: rotate(90deg);
    }

    .swiper-button-prev {
      left: 20px;
      transform: rotate(90deg);
    }
  }
}
</style>
