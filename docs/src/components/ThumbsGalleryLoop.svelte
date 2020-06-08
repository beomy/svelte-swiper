<script>
import { onMount, tick } from 'svelte'
import { Swiper, SwiperSlide } from 'svelte-swiper';

let swiperTop;
let swiperThumbs;

const topOptions = {
  spaceBetween: 10,
  loop:true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}

const thumbOptions = {
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
}
</script>

<div class="thumbs-gallery">
  <Swiper bind:swiper={swiperTop} className="gallery-top" options={topOptions} thumbs={swiperThumbs}>
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

    <!-- Add Arrows -->
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
  </Swiper>

  <Swiper bind:swiper={swiperThumbs} className="gallery-thumbs" options={thumbOptions}>
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
  </Swiper>
</div>

<style lang="scss" global>
  .thumbs-gallery {
    height: 100%;

    .swiper-container {
      width: 100%;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
    }
    .gallery-top {
      height: 80%;
      width: 100%;
    }
    .gallery-thumbs {
      height: 20%;
      box-sizing: border-box;
      padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-thumb-active {
      opacity: 1;
    }
  }
</style>
