<script lang="ts">
  import { afterUpdate, getContext } from 'svelte';
  import Swiper, { SwiperOptions } from 'swiper';
  import { key } from './context';
  import { getStyles } from './utils';
  import { DEFAULT_CLASSES } from './constants';

  export let className: string|string[] = '';
  export let style: string|object = '';
  export let hash: string|null = null;
  export let history: string|null = null;

  const context = getContext(key)
  const options: SwiperOptions = context.options;
  const slideClass: string = options.slideClass || DEFAULT_CLASSES.slideClass;
  let classes: string;
  let styles: string;

  $: classes = typeof className === 'string'
    ? [slideClass, className].join(' ').trim()
    : [slideClass, ...(className as string[])].join(' ').trim();

  $: styles = typeof style === 'string' ? style : getStyles(style);

  function update () {
    const swiper: Swiper|null = context.getSwiper()
    const autoUpdate = context.autoUpdate
    if (autoUpdate && swiper) {
      swiper.update()
    }
  }

  afterUpdate(() => {
    update()
  })
</script>

<div
  class={classes}
  style={styles || null}
  data-hash={hash}
  data-history={history}
>
  <slot></slot>
</div>
