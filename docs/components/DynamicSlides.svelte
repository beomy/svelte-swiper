<script>
import { Swiper, SwiperSlide } from 'svelte-swiper';

let swiperSlides = [1, 2, 3, 4, 5]

function appendSlide () {
  swiperSlides.push(swiperSlides.length + 1)
  swiperSlides = swiperSlides
}
function prependSlide () {
  swiperSlides.unshift(swiperSlides[0] - 1)
  swiperSlides = swiperSlides
}
function popSlide () {
  swiperSlides.pop()
  swiperSlides = swiperSlides
}
function shiftSlide () {
  swiperSlides.shift()
  swiperSlides = swiperSlides
}

const options = {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
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

<div class="toolbar-box">
  <div class="toolbar">
    <button on:click={prependSlide}>Prepend slide</button>
    <button on:click={appendSlide}>Append slide</button>
    <button on:click={popSlide}>Pop slide</button>
    <button on:click={shiftSlide}>Shift slide</button>
  </div>
</div>
<Swiper {options}>
  {#each swiperSlides as num (num)}
    <SwiperSlide>Slide {num}</SwiperSlide>
  {/each}

  <!-- Add Pagination -->
  <div class="swiper-pagination" slot="pagination"></div>
  <!-- Add Arrows -->
  <div class="swiper-button-next" slot="button-next"></div>
  <div class="swiper-button-prev" slot="button-prev"></div>
</Swiper>

<style lang="scss">
  .toolbar-box {
    position: relative;

    .toolbar {
      position: absolute;
      z-index: 2;
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: 2rem;
      border-bottom: 1px solid #e0e0e0;

      button {
        flex: 1;
        padding: 0;
        margin: 0;
        border: none;
        border-right: 1px solid #e0e0e0;
        background-color: #fff;
        cursor: pointer;
        &:last-child {
          border: none;
        }
        &:hover {
          background-color: #f7f7f7;
        }
      }
    }
  }
</style>
