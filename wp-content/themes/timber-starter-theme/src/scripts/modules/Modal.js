// =============================================================================
// Modules: Modals
// =============================================================================
// Custom modal functionality, seperate from Fancybox

// Import dependencies
// =============================================================================
import { module as es6Module } from 'modujs';
import { html } from '../utils/environment';

// Set default function and extend it ontop of our imported 'module'
// =============================================================================
export default class extends es6Module {
  // Set initial values
  // =========================================================================
  constructor(m) {
    super(m);

    // Defaults
    this.buttons = Array();
    this.modal = null;
    this.modalContent = null;
    this.closeButton = null;
  }

  // Init module
  // =========================================================================
  init() {
    // Variables
    this.buttons = this.el.querySelectorAll('[href="#facilitator"');
    this.modal = html.querySelector('[data-site-modal]');
    console.log(this.modal);

    this.modalContent = this.modal.querySelector('.c-modal__body');
    this.closeButton = this.modal.querySelector('.c-modal__close');

    // Actions
    this.buttons.forEach(button => {
      button.addEventListener('click', (e) => this.openModal(e));
    });
    this.closeButton.addEventListener('click', () => this.closeModal());
    this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.closeModal();
    });
  }

  // Open Modal
  // =========================================================================
  openModal(e) {
    e.preventDefault();
    // this.modalContent.innerHTML = ''; // Clear previous content
    // You can load or set modal content here
    this.modal.setAttribute('aria-hidden', 'false');
    this.modal.classList.add('is-active');
  }

  // Close Modal
  // =========================================================================
  closeModal() {
      this.modal.setAttribute('aria-hidden', 'true');
      this.modal.classList.remove('is-active');
  }

  // Destroy
  // =========================================================================
  destroy() {}
}
