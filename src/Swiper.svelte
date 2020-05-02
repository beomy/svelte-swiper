<script lang="ts">
  import Swiper, { SwiperOptions } from 'swiper';
  import { onMount } from 'svelte';

  export let options: SwiperOptions;

  let swiper;

  onMount(() => {
    swiper = new Swiper('.swiper-container', options);
  })
</script>

<div class="swiper-container">
  <div class="swiper-wrapper">
    <slot></slot>
  </div>
</div>
