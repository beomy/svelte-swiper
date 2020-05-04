<script lang="ts">
  import { onMount, setContext } from 'svelte';
  import Swiper, { SwiperOptions } from 'swiper';
  import { key } from './context';
  import { getStyles } from './utils';
  import { DEFAULT_CLASSES } from './constants';

  export let options: SwiperOptions = {};
  export let swiper: any = null;
  export let className: string|string[] = '';
  export let style: string|object = '';

  const wrapperClass: string = options.wrapperClass || DEFAULT_CLASSES.wrapperClass;
  let el: HTMLElement;
  let classes: string;
  let styles: string;

  $: classes = typeof className === 'string'
    ? [DEFAULT_CLASSES.containerClass, className].join(' ').trim()
    : [DEFAULT_CLASSES.containerClass, ...(className as string[])].join(' ').trim();

  $: styles = typeof style === 'string' ? style : getStyles(style);

  setContext(key, { options });
  onMount(() => {
    swiper = new Swiper(el, options);
  });
</script>

<div
  bind:this={el}
  class={classes}
  style={styles || null}
>
  <div class={wrapperClass}>
    <slot></slot>
  </div>
  <slot name="button-next"></slot>
  <slot name="button-prev"></slot>
  <slot name="pagination"></slot>
  <slot name="scrollbar"></slot>
</div>
