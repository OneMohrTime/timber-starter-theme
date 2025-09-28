// =============================================================================
// Modules: Scroll
// =============================================================================
// Establishes custom scrolling functionality allowing for anything from smooth
// scrolling to parallax elements right out of the box with use of 'Mighty Scroll'

// Import dependencies
// =============================================================================
import { module as es6Module } from 'modujs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Set default function and extend it ontop of our imported 'module'
// =============================================================================
export default class extends es6Module {

  constructor(m) {
    super(m);

    this.container = null;
    this.media = null;
  }

  // Init module
  // ===========================================================================
  init() {
    this.container = this.el;
    this.media = this.el.querySelector('.c-media');

    gsap.fromTo(
      this.media, {
        yPercent: -25
      }, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: this.container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }
}
