<script>
import { Swiper, SwiperSlide } from '../../src';

let swiper;
let menuButton;

function openMenu () {
  swiper.slidePrev();
}

const options = {
  slidesPerView: 'auto',
  initialSlide: 1,
  resistanceRatio: 0,
  slideToClickedSlide: true,
}

function slideChangeTransitionStart () {
  const slider = this;
  if (slider.activeIndex === 0) {
    menuButton.classList.add('cross');
    // required because of slideToClickedSlide
    menuButton.removeEventListener('click', openMenu, true);
  } else {
    menuButton.classList.remove('cross');
  }
}

function slideChangeTransitionEnd () {
  var slider = this;
  if (slider.activeIndex === 1) {
    menuButton.addEventListener('click', openMenu, true);
  }
}
</script>

<Swiper
  bind:swiper={swiper}
  className="slideable-menu"
  {options}
  on:slideChangeTransitionStart={slideChangeTransitionStart}
  on:slideChangeTransitionEnd={slideChangeTransitionEnd}
>
  <SwiperSlide className="menu">Menu slide</SwiperSlide>
  <SwiperSlide className="content">
    <div
      bind:this={menuButton}
      class="menu-button"
    >
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    Content slide
  </SwiperSlide>
</Swiper>

<style lang="scss" global>
  .slideable-menu {
    .menu {
      min-width: 100px;
      width: 70%;
      max-width: 320px;

      background-color: #2C8DFB;
      color: #fff;
    }
    .content {
      width: 100%;
    }

    .menu-button {
      position: absolute;
      top: 0px; left: 0px;

      padding: 15px;

      cursor: pointer;

      -webkit-transition: .3s;
      transition: .3s;

      background-color: #2C8DFB;

      /*margin: 14px;
      border-radius: 5px;*/
    }
    .menu-button .bar:nth-of-type(1) {
      margin-top: 0px;
    }
    .menu-button .bar:nth-of-type(3) {
      margin-bottom: 0px;
    }

    .bar {
      position: relative;
      display: block;

      width: 50px;
      height: 5px;

      margin: 10px auto;
      background-color: #fff;

      border-radius: 10px;

      -webkit-transition: .3s;
      transition: .3s;
    }

    .menu-button:hover .bar:nth-of-type(1) {
      -webkit-transform: translateY(1.5px) rotate(-4.5deg);
      -ms-transform: translateY(1.5px) rotate(-4.5deg);
      transform: translateY(1.5px) rotate(-4.5deg);
    }
    .menu-button:hover .bar:nth-of-type(2) {
      opacity: .9;
    }
    .menu-button:hover .bar:nth-of-type(3) {
      -webkit-transform: translateY(-1.5px) rotate(4.5deg);
      -ms-transform: translateY(-1.5px) rotate(4.5deg);
      transform: translateY(-1.5px) rotate(4.5deg);
    }

    .cross .bar:nth-of-type(1) {
      -webkit-transform: translateY(15px) rotate(-45deg);
      -ms-transform: translateY(15px) rotate(-45deg);
      transform: translateY(15px) rotate(-45deg);
    }
    .cross .bar:nth-of-type(2) {
      opacity: 0;
    }
    .cross .bar:nth-of-type(3) {
      -webkit-transform: translateY(-15px) rotate(45deg);
      -ms-transform: translateY(-15px) rotate(45deg);
      transform: translateY(-15px) rotate(45deg);
    }
    .cross:hover .bar:nth-of-type(1) {
      -webkit-transform: translateY(13.5px) rotate(-40.5deg);
      -ms-transform: translateY(13.5px) rotate(-40.5deg);
      transform: translateY(13.5px) rotate(-40.5deg);
    }
    .cross:hover .bar:nth-of-type(2) {
      opacity: .1;
    }
    .cross:hover .bar:nth-of-type(3) {
      -webkit-transform: translateY(-13.5px) rotate(40.5deg);
      -ms-transform: translateY(-13.5px) rotate(40.5deg);
      transform: translateY(-13.5px) rotate(40.5deg);
    }
  }
</style>
