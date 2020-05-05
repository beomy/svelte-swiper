[Swiper](https://swiperjs.com/) component for Svelte

# Example
- [Demos](https://beomy.github.io/svelte-swiper)

# Install

This library support Svelte >= 3.0. And use swiper.js > 5.x.

```
npm install svelte-swiper
or
yarn add svelte-swiper
```

# rollup config

When this library use in rollup, you need some config:

```js
// rollup.config.js
export default {
  // ...
  plugins: [
    // ...
    commonjs({
      namedExports: { 'svelte-swiper': ['Hammer', 'pan', 'pinch', 'press', 'rotate', 'swipe', 'tap'] }
    }),
    // ...
  ]
}
```

# Usage

```html
<script>
  import { pan } from 'svelte-hammer'
</script>
<div
  use:pan
  on:panstart={({ detail }) => /* Pan Start */}
  ...
>
</div>
```

```html
<script>
  import svelteHammer from 'svelte-hammer'
</script>
<div
  use:svelteHammer.pan
  on:panstart={({ detail }) => /* Pan Start */}
  ...
>
</div>
```

`detail` is hammer.js [event object](https://hammerjs.github.io/api/#event-object)

You take choose one.

## Pan

```html
<script>
  import { pan } from 'svelte-hammer'
</script>
<div
  use:pan
  on:panstart={({ detail }) => /* Pan Start */}
  on:panmove={({ detail }) => /* Pan Move */}
  on:panend={({ detail }) => /* Pan End */}
>
</div>
```

### Directives

- `on:pan`: Detect all pan event
- `on:panstart`: Detect start pan event
- `on:panmove`: Detect move pan event
- `on:panend`: Detect end pan event
- `on:pancancel`: Detect cancel pan event
- `on:panleft`: Detect left pan event
- `on:panright`: Detect right pan event
- `on:panup`: Detect up pan event
- `on:pandown`: Detect down pan event

## Pinch

```html
<script>
  import { pinch } from 'svelte-hammer'
</script>
<div
  use:pinch
  on:pinchstart={({ detail }) => /* Pinch Start */}
  on:pinchmove={({ detail }) => /* Pinch Move */}
  on:pinchend={({ detail }) => /* Pinch End */}
>
</div>
```

### Directives

- `on:pinch`: Detect all pinch event
- `on:pinchstart`: Detect start pinch event
- `on:pinchmove`: Detect move pinch event
- `on:pinchend`: Detect end pinch event
- `on:pinchcancel`: Detect cancel pinch event
- `on:pinchin`: Detect in pinch event
- `on:pinchout`: Detect out pinch event

## Press

```html
<script>
  import { press } from 'svelte-hammer'
</script>
<div
  use:press
  on:press={({ detail }) => /* Press */}
  on:pressup={({ detail }) => /* Press Up */}
>
</div>
```

### Directives

- `on:press`: Detect press event
- `on:pressup`: Detect up press event

## Rotate

```html
<script>
  import { rotate } from 'svelte-hammer'
</script>
<div
  use:rotate
  on:rotatestart={({ detail }) => /* Rotate Start */}
  on:rotatemove={({ detail }) => /* Rotate Move */}
  on:rotateend={({ detail }) => /* Rotate End */}
>
</div>
```

### Directives

- `on:rotate`: Detect all rotate event
- `on:rotatestart`: Detect start rotate event
- `on:rotatemove`: Detect move rotate event
- `on:rotateend`: Detect end rotate event
- `on:rotatecancel`: Detect cancel rotate event

## Swipe

```html
<script>
  import { swipe } from 'svelte-hammer'
</script>
<div
  use:swipe
  on:swipeleft={({ detail }) => /* Swipe Left */}
  on:swiperight={({ detail }) => /* Swipe Right */}
  on:swipeup={({ detail }) => /* Swipe Up */}
  on:swipedown={({ detail }) => /* Swipe Down */}
>
</div>
```

### Directives

- `on:swipe`: Detect all swipe event
- `on:swipeleft`: Detect left swipe event
- `on:swiperight`: Detect right swipe event
- `on:swipeup`: Detect up swipe event
- `on:swipedown`: Detect down swipe event

## Tap

```html
<script>
  import { tap } from 'svelte-hammer'
</script>
<div
  use:tap
  on:tap={({ detail }) => /* Tap */}
>
</div>
```

### Directives

- `on:tap`: Detect tap event

## Using Custom Options

Using custom recognizer options such as `direction` and `threshold`:

```html
<script>
  import { Hammer, swipe } from 'svelte-hammer'
</script>
<div
  use:swipe={{ direction: Hammer.DIRECTION_ALL }}
  on:swipeleft={({ detail }) => /* Swipe Left */}
  on:swiperight={({ detail }) => /* Swipe Right */}
  on:swipeup={({ detail }) => /* Swipe Up */}
  on:swipedown={({ detail }) => /* Swipe Down */}
>
</div>
```

All gestures same usage.

# License
MIT

# Author
[Hyo Bum Lee](https://beomy.github.io/)
