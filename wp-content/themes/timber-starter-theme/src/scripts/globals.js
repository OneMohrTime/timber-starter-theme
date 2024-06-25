// =============================================================================
// Globals
// =============================================================================
// Set and run functions globally throughout our app

// Import dependencies
// =============================================================================
// import npm from 'npm';

// Set default function
// =============================================================================
export default function() {

  /**
   * Footer scroll-to-top
   */

  const scrollToTop = document.querySelector('#scroll_to_top');

  if (scrollToTop) {
    scrollToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

}
