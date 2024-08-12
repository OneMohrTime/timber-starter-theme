// =============================================================================
// Modules: Accordion
// =============================================================================
// Accordion created from modjus README

// Import dependencies
// =============================================================================
import { module as es6Module } from 'modujs';

// Set default function and extend it ontop of our imported 'module'
// =============================================================================
export default class extends es6Module {

  // Set initial values
  // =========================================================================
  constructor(m) {
    super(m);

    // Default
    this.events = {
      click: {
        header: 'toggleSection'
      }
    }
  }

  // Init module
  // =========================================================================
  init() {
    if (this.getData('open')) {
      this.$('section')[0].classList.add('is-open');
    }
  }

  // Toggle Section
  // =========================================================================
  toggleSection(e) {
    const target = e.currentTarget;
    const section = this.parent('section', target);
    const main = this.$('main', target);

    if (section.classList.contains('is-open')) {
        section.classList.remove('is-open');
    } else {
        this.$('section.is-open').classList.remove('is-open');
        section.classList.add('is-open');
        this.call('scrollto', section, 'scroll', 'main');
    }
  }

  // <div data-module-accordion data-accordion-open="true">
  //     <section data-accordion="section">
  //         <header data-accordion="header">
  //             <h2>Title</h2>
  //         </header>
  //         <div data-accordion="main">
  //             <p>Content</p>
  //         </div>
  //     </section>
  //     <section data-accordion="section">
  //         <header data-accordion="header">
  //             <h2>Title</h2>
  //         </header>
  //         <div data-accordion="main">
  //             <p>Content</p>
  //         </div>
  //     </section>
  // </div>

  // Destroy
  // =========================================================================
  destroy() {}
}
