// =============================================================================
// Modules: Swiper (v11)
// =============================================================================
// Controls all swiper slide areas around the site
// https://swiperjs.com/swiper-api

// Import dependencies
// =============================================================================
import { module as es6Module } from 'modujs';
import Swiper from 'swiper';
import {
  A11y,
  // Autoplay,
  // Controller,
  // EffectCards,
  // EffectCoverflow,
  // EffectCreative,
  // EffectCube,
  // EffectFade,
  // EffectFlip,
  // FreeMode,
  // Grid,
  // HashNavigation,
  // History,
  // Keyboard,
  // Manipulation,
  // Mousewheel,
  Navigation,
  // Pagination,
  // Parallax,
  // Scrollbar,
  // Thumbs,
  // Virtual,
  // Zoom
} from 'swiper/modules';

// Swiper styles
import 'swiper/scss';
import 'swiper/scss/a11y';
// import 'swiper/scss/autoplay';
// import 'swiper/scss/controller';
// import 'swiper/scss/effect-cards';
// import 'swiper/scss/effect-coverflow';
// import 'swiper/scss/effect-creative';
// import 'swiper/scss/effect-cube';
// import 'swiper/scss/effect-fade';
// import 'swiper/scss/effect-flip';
// import 'swiper/scss/free-mode';
// import 'swiper/scss/grid';
// import 'swiper/scss/hash-navigation';
// import 'swiper/scss/history';
// import 'swiper/scss/keyboard';
// import 'swiper/scss/manipulation';
// import 'swiper/scss/mousewheel';
import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import 'swiper/scss/parallax';
// import 'swiper/scss/scrollbar';
// import 'swiper/scss/thumbs';
// import 'swiper/scss/virtual';
// import 'swiper/scss/zoom';

// Set default function and extend it ontop of our imported 'module'
// =============================================================================
export default class extends es6Module {
  // Set initial values
  // =========================================================================
  constructor(m) {
    super(m);

    // Default
    this.classes = null;
    this.params = null;
    this.swiper = null;
  }

  // Init module
  // =========================================================================
  init() {
    this.classes = this.el.classList;

    if (this.classes.contains('is-quotes')) {
      this.createTestimonials();
    }
  }

  // Create Testimonials
  // =========================================================================
  createTestimonials() {
    this.params = {
      // configure Swiper to use modules
      modules: [A11y, Navigation],

      // params
      a11y: {
        enabled: true
      },
      effect: 'slide',
      navigation: {
        nextEl: '.c-button.is-next',
        prevEl: '.c-button.is-prev',
      },
      slidesPerView: 1,
      spaceBetween: 0,
    };

    // Init Swiper
    this.swiper = new Swiper(this.el, this.params);
  }

  // Destroy
  // =========================================================================
  destroy() {}
}
