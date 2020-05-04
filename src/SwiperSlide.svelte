<script lang="ts">
  import { getContext } from 'svelte';
  import { SwiperOptions } from 'swiper';
  import { key } from './context';
  import { getStyles } from './utils';
  import { DEFAULT_CLASSES } from './constants';

  export let className: string|string[] = '';
  export let style: string|object = '';

  const options: SwiperOptions = getContext(key).options;
  const slideClass: string = options.slideClass || DEFAULT_CLASSES.slideClass;
  let classes: string;
  let styles: string;

  $: classes = typeof className === 'string'
    ? [slideClass, className].join(' ').trim()
    : [slideClass, ...(className as string[])].join(' ').trim();

  $: styles = typeof style === 'string' ? style : getStyles(style);
</script>

<div
  class={classes}
  style={styles || null}
>
  <slot></slot>
</div>
