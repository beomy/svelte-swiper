<script lang="ts">
  import { onMount, setContext } from 'svelte';
  import Swiper, { SwiperOptions } from 'swiper';
  import { key } from './contexts/options';

  export let options: SwiperOptions;
  export let swiper: any;
  export let className: string = 'swiper-container';
  const wrapperClass: string = options && options.wrapperClass
    ? options.wrapperClass
    : 'swiper-wrapper';

  setContext(key, { options });
  onMount(() => {
    swiper = new Swiper(`.${className}`, options);
  });
</script>

<div class={className}>
  <div class={wrapperClass}>
    <slot></slot>
  </div>
  <slot name="button-next"></slot>
  <slot name="button-prev"></slot>
  <slot name="pagination"></slot>
  <slot name="scrollbar"></slot>
</div>
