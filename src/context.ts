import type Swiper from 'swiper';
import type { SwiperOptions } from 'swiper';

interface IContext {
  options: SwiperOptions,
  autoUpdate: boolean,
  getSwiper: () => Swiper
}

const key = {};

export { key };
export type { IContext };
