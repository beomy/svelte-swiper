[swiper.js](https://swiperjs.com/) component for Svelte.

# Example
- [Demos](https://beomy.github.io/svelte-swiper)

# Install
This library support Svelte >= 3.0. And use swiper.js > 6.x.

```
npm install svelte-swiper
or
yarn add svelte-swiper
```

# rollup config
When this library use in rollup, you need some config:

```
npm install rollup-plugin-css-only
or
yarn add rollup-plugin-css-only
```

```js
// rollup.config.js
import css from 'rollup-plugin-css-only'

export default {
  // ...
  plugins: [
    // ...
    commonjs({
      namedExports: {
        'svelte-swiper': ['Swiper', 'SwiperSlide']
      }
    }),
    // ...
    css({ output: 'public/build/swiper-bundle.css' }),
    // ...
  ]
  // ...
}
```

```html
<!-- public/index.html -->
<!doctype html>
<html>
<head>
  <!-- ... -->
  <link rel='stylesheet' href='/build/swiper-bundle.css'>
</head>
  <!-- ... -->
</html>
```

# Usage
This library need to use `swiper.css`.

`import 'swiper/swiper-bundle.css'` add in `main.js`:

```js
// main.js
import App from './App.svelte';
import 'swiper/swiper-bundle.css'

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
```

## Use Component
`svelte-swiper` has two component, `Swiper` and `SwiperSlide`.

```html
<script>
  import { Swiper, SwiperSlide } from 'svelte-swiper';
  
  const options = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
</script>

<Swiper {options}>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
  <SwiperSlide>Slide 5</SwiperSlide>
  <SwiperSlide>Slide 6</SwiperSlide>
  <SwiperSlide>Slide 7</SwiperSlide>
  <SwiperSlide>Slide 8</SwiperSlide>
  <SwiperSlide>Slide 9</SwiperSlide>
  <SwiperSlide>Slide 10</SwiperSlide>

  <div class="swiper-pagination" slot="pagination"></div>
  <div class="swiper-button-next" slot="button-next"></div>
  <div class="swiper-button-prev" slot="button-prev"></div>
</Swiper>
```

## Use Class, Style
You can use `className` and `style`. `className` is css class

```html
<Swiper className="cssSwiperClass" style="background-color:black;" {options}>
  <SwiperSlide className="cssSlideClass" style="background-color:red;">Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
  <SwiperSlide>Slide 5</SwiperSlide>
  <SwiperSlide>Slide 6</SwiperSlide>
  <SwiperSlide>Slide 7</SwiperSlide>
  <SwiperSlide>Slide 8</SwiperSlide>
  <SwiperSlide>Slide 9</SwiperSlide>
  <SwiperSlide>Slide 10</SwiperSlide>
</Swiper>
```

## Component API
`svelte-swiper` support `swiper.js` events. ([https://swiperjs.com/api/#events](https://swiperjs.com/api/#events))

```html
<Swiper
  on:slideChangeTransitionStart="{() => {}}"
  on:slideChangeTransitionEnd="{() => {}}"
  ...
/>
```

## Swiper instance
swiper instance use for slider methods. ([https://swiperjs.com/api/#methods](https://swiperjs.com/api/#methods)). also `svelte-swiper` can use swiper instance.

```html
<script>
  import { Swiper, SwiperSlide } from 'svelte-swiper';
  let mySwiper;

  function slideTo () {
    mySwiper.slideTo(5);
  }
</script>

<button on:click={slideTo}>slideTo</button>

<Swiper bind:swiper={mySwiper}>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
  <SwiperSlide>Slide 5</SwiperSlide>
  <SwiperSlide>Slide 6</SwiperSlide>
  <SwiperSlide>Slide 7</SwiperSlide>
  <SwiperSlide>Slide 8</SwiperSlide>
  <SwiperSlide>Slide 9</SwiperSlide>
  <SwiperSlide>Slide 10</SwiperSlide>
</Swiper>
```

# License
MIT

# Author
[Hyo Bum Lee](https://beomy.github.io/)

# Known issues
- [https://github.com/sveltejs/svelte/issues/3964](https://github.com/sveltejs/svelte/issues/3964)
