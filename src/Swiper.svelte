<script lang="ts">
  import { onMount, afterUpdate, onDestroy, tick, setContext, createEventDispatcher } from 'svelte';
  import Swiper, { SwiperOptions } from 'swiper';
  import { key } from './context';
  import { getStyles } from './utils';
  import { DEFAULT_CLASSES, SWIPER_EVENTS } from './constants';

  export let options: SwiperOptions = {};
  export let swiper: Swiper|null = null;
  export let className: string|string[] = '';
  export let style: string|object = '';
  export let dir: string|null = null;
  export let autoUpdate: boolean = true;
  export let autoDestroy: boolean = true;
  export let deleteInstanceOnDestroy: boolean = true;
  export let cleanupStylesOnDestroy: boolean = true;

  const wrapperClass: string = options.wrapperClass || DEFAULT_CLASSES.wrapperClass;
  const dispatch = createEventDispatcher();
  let el: HTMLElement;
  let classes: string;
  let styles: string;

  $: classes = typeof className === 'string'
    ? [DEFAULT_CLASSES.containerClass, className].join(' ').trim()
    : [DEFAULT_CLASSES.containerClass, ...(className as string[])].join(' ').trim();

  $: styles = typeof style === 'string' ? style : getStyles(style);

  $: {
    const instance = swiper as any
    if (instance && instance.thumbs && instance.thumbs.swiper) {
      updateSwiper();
    }
  }

  function bindSwiperEvents () {
    for (const eventName of SWIPER_EVENTS) {
      (swiper as any).on(eventName, (...params: any) => {
        dispatch(eventName, params);
      });
    }
  }

  function updateSwiper () {
    if (autoUpdate && swiper) {
      swiper.update();
      if (swiper.navigation && swiper.navigation.update) {
        swiper.navigation.update();
      }
      if (swiper.pagination) {
        if (swiper.pagination.render) {
          swiper.pagination.render();
        }
        if (swiper.pagination.update) {
          swiper.pagination.update();
        }
      }
    }
  }

  function destroySwiper () {
    if (autoDestroy && swiper && swiper.destroy) {
      swiper.destroy(deleteInstanceOnDestroy, cleanupStylesOnDestroy);
    }
  }

  setContext(key, {
    options,
    autoUpdate,
    getSwiper: () => swiper
  });
  afterUpdate(() => {
    updateSwiper();
  });
  onMount(async () => {
    await tick();
    swiper = new Swiper(el, options);
    bindSwiperEvents();
  });
  onDestroy(() => {
    destroySwiper();
  });
</script>

<div
  bind:this={el}
  class={classes}
  style={styles || null}
  {dir}
>
  <slot name="parallax-bg"></slot>
  <div class={wrapperClass}>
    <slot></slot>
  </div>
  <slot name="button-next"></slot>
  <slot name="button-prev"></slot>
  <slot name="pagination"></slot>
  <slot name="scrollbar"></slot>
</div>
