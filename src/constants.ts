import { CommonEvent } from 'swiper'

export const DEFAULT_CLASSES = Object.freeze({
  containerClass: 'swiper-container',
  wrapperClass: 'swiper-wrapper',
  slideClass: 'swiper-slide'
})

// https://swiperjs.com/api/#events
export const SWIPER_EVENTS: CommonEvent[] = [
  'init',
  'beforeDestroy',
  'slideChange',
  'slideChangeTransitionStart',
  'slideChangeTransitionEnd',
  'slideNextTransitionStart',
  'slideNextTransitionEnd',
  'slidePrevTransitionStart',
  'slidePrevTransitionEnd',
  'transitionStart',
  'transitionEnd',
  'touchStart',
  'touchMove',
  'touchMoveOpposite',
  'sliderMove',
  'touchEnd',
  'click',
  'tap',
  'doubleTap',
  'imagesReady',
  'progress',
  'reachBeginning',
  'reachEnd',
  'fromEdge',
  'setTranslate',
  'setTransition',
  'resize',
  'observerUpdate' as CommonEvent,
  'beforeLoopFix' as CommonEvent,
  'loopFix' as CommonEvent
]
