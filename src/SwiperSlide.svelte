<script lang="ts">
  import { getContext } from 'svelte';
  import { SwiperOptions } from 'swiper';
  import { key } from './contexts/options';

  const options: SwiperOptions = getContext(key).options;
  const slideClass: string = options && options.slideClass
    ? options.slideClass
    : 'swiper-slide';
</script>

<div class={slideClass}>
  <slot></slot>
</div>
