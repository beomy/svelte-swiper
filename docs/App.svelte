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
import SlidesPerColumn from './components/SlidesPerColumn.svelte'
import Nested from './components/Nested.svelte'
import GrabCursor from './components/GrabCursor.svelte'
import InfiniteLoop from './components/InfiniteLoop.svelte'
import InfiniteLoopWithSlidesPerGroup from './components/InfiniteLoopWithSlidesPerGroup.svelte'
import EffectFade from './components/EffectFade.svelte'
import EffectCube from './components/EffectCube.svelte'
import EffectCoverflow from './components/EffectCoverflow.svelte'
import EffectFilp from './components/EffectFilp.svelte'
import KeyboardControl from './components/KeyboardControl.svelte'
import MousewheelControl from './components/MousewheelControl.svelte'
import Autoplay from './components/Autoplay.svelte'
import DynamicSlides from './components/DynamicSlides.svelte'
import ThumbsGallery from './components/ThumbsGallery.svelte'
import ThumbsGalleryLoop from './components/ThumbsGalleryLoop.svelte'
import HashNavigation from './components/HashNavigation.svelte'
import History from './components/History.svelte'
import RTL from './components/RTL.svelte'
import Parallax from './components/Parallax.svelte'
import LazyLoadImages from './components/LazyLoadImages.svelte'
import ResponsiveBreakpoints from './components/ResponsiveBreakpoints.svelte'
import AutoHeight from './components/AutoHeight.svelte'
import Zoom from './components/Zoom.svelte'
import VirtualSlides from './components/VirtualSlides.svelte'
import SlideableMenu from './components/SlideableMenu.svelte'
import RatioBreakpoints from './components/RatioBreakpoints.svelte'
import ChangeDirection from './components/ChangeDirection.svelte'

const components = [
  { comp: Default, title: 'Default Setup' },
  { comp: Navigation, title: 'Navigation' },
  { comp: Pagination, title: 'Pagination' },
  { comp: PaginationDynamic, title: 'Pagination / Dynamic Bullets' },
  { comp: PaginationProgress, title: 'Progress Pagination' },
  { comp: PaginationFraction, title: 'Fraction Pagination' },
  { comp: Scrollbar, title: 'Scrollbar' },
  { comp: Vertical, title: 'Vertical Slider' },
  { comp: SpaceBetween, title: 'Space Between Slides' },
  { comp: SlidePerView, title: 'Multiple Slides Per View' },
  { comp: SlidePerViewAuto, title: 'Auto Slides Per View / Carousel Mode' },
  { comp: Centered, title: 'Centered Slides' },
  { comp: CenteredAuto, title: 'Centered Slides + Auto Slides Per View' },
  { comp: CssMode, title: 'CSS Scroll Snap (CSS Mode)' },
  { comp: FreeMode, title: 'Free Mode / No Fixed Positions' },
  { comp: ScrollContainer, title: 'Scroll Container' },
  { comp: SlidesPerColumn, title: 'Multi Row Slides Layout' },
  { comp: Nested, title: 'Nested Swipers' },
  { comp: GrabCursor, title: 'Grab Cursor' },
  { comp: InfiniteLoop, title: 'Loop Mode / Infinite Loop' },
  { comp: InfiniteLoopWithSlidesPerGroup, title: 'Loop Mode with Multiple Slides Per Group' },
  { comp: EffectFade, title: 'Fade Effect' },
  { comp: EffectCube, title: '3D Cube Effect' },
  { comp: EffectCoverflow, title: '3D Coverflow Effect' },
  { comp: EffectFilp, title: '3D Flip Effect' },
  { comp: KeyboardControl, title: 'Keyboard Control' },
  { comp: MousewheelControl, title: 'Mousewheel Control' },
  { comp: Autoplay, title: 'Autoplay' },
  { comp: DynamicSlides, title: 'Dynamic Slides' },
  { comp: ThumbsGallery, title: 'Thumbs Gallery' },
  { comp: ThumbsGalleryLoop, title: 'Thumbs Gallery With Loop Mode' },
  { comp: HashNavigation, title: 'Hash Navigation' },
  { comp: History, title: 'History API' },
  { comp: RTL, title: 'RTL Layout' },
  { comp: Parallax, title: 'Parallax' },
  { comp: LazyLoadImages, title: 'Lazy Loading Images' },
  { comp: ResponsiveBreakpoints, title: 'Responsive Breakpoints' },
  { comp: AutoHeight, title: 'Auto Height' },
  { comp: Zoom, title: 'Zoom' },
  { comp: VirtualSlides, title: 'Virtual Slides' },
  { comp: SlideableMenu, title: 'Slideable Navigation Drawer' },
  { comp: RatioBreakpoints, title: 'Ratio breakpoints' },
  { comp: ChangeDirection, title: 'Change direction' },
]
</script>

{#each components as { comp, title } (comp.name)}
<div class="example-conatiner">
  <h1>{title}</h1>
  <a href={`https://github.com/beomy/svelte-swiper/blob/master/docs/components/${comp.name}.svelte`} target="_blank">Souce code</a>
  <div class="example">
    <svelte:component this={comp} />
  </div>
</div>
{/each}

<style lang="scss" global>
  .example-conatiner {
    h1 {
      margin: 10px 0;
    }
    a {
      display: inline-block;
      margin-bottom: 5px;
    }

    .example {
      position: relative;
      height: 400px;
      border: 1px solid #aaa;
      margin-bottom: 40px;
      background: #eee;
    }
  }

  .swiper-container {
    width: 100%;
    height: 100%;
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
