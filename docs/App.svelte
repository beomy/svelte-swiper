<script>
import Default from './components/Default.svelte'
import Navigation from './components/Navigation.svelte'
import Pagination from './components/Pagination.svelte'
import PaginationDynamic from './components/PaginationDynamic.svelte'
import PaginationProgress from './components/PaginationProgress.svelte'
import PaginationFraction from './components/PaginationFraction.svelte'
import PaginationCustom from './components/PaginationCustom.svelte'
import Scrollbar from './components/Scrollbar.svelte'
import Vertical from './components/Vertical.svelte'
import SpaceBetween from './components/SpaceBetween.svelte'
import SlidePerView from './components/SlidePerView.svelte'
import SlidePerViewAuto from './components/SlidePerViewAuto.svelte'
import Centered from './components/Centered.svelte'
import CenteredAuto from './components/CenteredAuto.svelte'
import CssMode from './components/CssMode.svelte'
import FreeMode from './components/FreeMode.svelte'
import ScrollContainer from './components/ScrollContainer.svelte'

const components = [
  { comp: Default, className: 'Default', title: 'Default Setup' },
  { comp: Navigation, className: 'Navigation', title: 'Navigation' },
  { comp: Pagination, className: 'Pagination', title: 'Pagination' },
  { comp: PaginationDynamic, className: 'PaginationDynamic', title: 'Pagination / Dynamic Bullets' },
  { comp: PaginationProgress, className: 'PaginationProgress', title: 'Progress Pagination' },
  { comp: PaginationFraction, className: 'PaginationFraction', title: 'Fraction Pagination' },
  { comp: Scrollbar, className: 'Scrollbar', title: 'Scrollbar' },
  { comp: Vertical, className: 'Vertical', title: 'Vertical Slider' },
  { comp: SpaceBetween, className: 'SpaceBetween', title: 'Space Between Slides' },
  { comp: SlidePerView, className: 'SlidePerView', title: 'Multiple Slides Per View' },
  { comp: SlidePerViewAuto, className: 'SlidePerViewAuto', title: 'Auto Slides Per View / Carousel Mode' },
  { comp: Centered, className: 'Centered', title: 'Centered Slides' },
  { comp: CssMode, className: 'CssMode', title: 'CSS Scroll Snap (CSS Mode)' },
  { comp: FreeMode, className: 'FreeMode', title: 'Free Mode / No Fixed Positions' },
  { comp: ScrollContainer, className: 'ScrollContainer', title: 'Scroll Container' },
]
</script>

{#each components as { comp, href, className, title } (className)}
<div class="example-conatiner">
  <h1>{title}</h1>
  <a href={`https://github.com/beomy/svelte-swiper/blob/master/components/${className}.svelte`} target="_blank">Souce code</a>
  <div class="example">
    <svelte:component this={comp} {className} />
  </div>
</div>
{/each}

<style lang="scss" global>
  .example {
    height: 400px;
    border: 1px solid #aaa;
    margin-bottom: 40px;

    > div {
      width: 100%;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      overflow: hidden;
      list-style: none;
      padding: 0;
      z-index: 1;
      background: #eee;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
