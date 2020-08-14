<script>
import { Swiper } from 'svelte-swiper';

let appendNumber = 600;
let prependNumber = 1;
let swiper;

function prepend2Sildes () {
  swiper.virtual.prependSlide([
    'Slide ' + (--prependNumber),
    'Slide ' + (--prependNumber)
  ]);
}

function slide1 () {
  swiper.slideTo(0, 0);
}

function slide250 () {
  swiper.slideTo(249, 0);
}

function slide500 () {
  swiper.slideTo(499, 0);
}

function appendSlide () {
  swiper.virtual.appendSlide('Slide ' + (++appendNumber));
}

const options = {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  virtual: {
    slides: (function () {
      var slides = [];
      for (var i = 0; i < 600; i += 1) {
        slides.push('Slide ' + (i + 1));
      }
      return slides;
    }()),
  },
}
</script>

<div class="toolbar-box">
  <div class="toolbar">
    <button on:click={prepend2Sildes}>Prepend 2 Slides</button>
    <button on:click={slide1}>Slide 1</button>
    <button on:click={slide250}>Slide 250</button>
    <button on:click={slide500}>Slide 500</button>
    <button on:click={appendSlide}>Append Slide</button>
  </div>
</div>
<Swiper bind:swiper={swiper} {options}>
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
