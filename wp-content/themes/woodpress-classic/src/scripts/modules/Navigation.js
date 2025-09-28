// =============================================================================
// Modules: Navigation
// =============================================================================
// Controls show/hide of primary navigation menus

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

    // Vars
    this.classes = [];
    this.header = null;
    this.navigation = null;
    this.menu = null;
    this.toggleMenu = null;
  }

  // Init module
  // =========================================================================
  init() {
    // Vars
    this.header     = this.el;
    this.navigation = this.header.querySelector('.c-navigation');
    this.menu       = this.header.querySelector('.c-navigation__menu');
    this.toggleMenu = this.header.querySelector('.c-navigation__toggle');

    // Functions
    this.handleScroll();
    this.handleNavbarTransparency();

    // Attach click event listener to the toggle button
    const toggleButton = this.toggleMenu;
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {

        // Open primary navigation
        this.togglePrimaryNav();
        this.handleMobileDropdowns();
        // Mega menu support
        this.handleMegaMenu();
      });
    }

  }

  // Handle Scroll
  // =========================================================================
  handleScroll() {
    // Store navbar classes
    this.classes = this.header.classList;

    // Initial scroll position
    let scrollState = 0;

    // Returns current scroll position
    const scrollTop = () => window.scrollY;

    // Primary scroll event function
    const scrollDetect = (home, down, up) => {
      // Current scroll position
      const currentScroll = scrollTop();
      if (currentScroll === 0) {
        home();
      } else if (currentScroll > scrollState) {
        down();
      } else {
        up();
      }
      // Set previous scroll position
      scrollState = scrollTop();
    };

    const homeAction = () => {
      this.classes.remove('-slideUp');
      this.classes.remove('-slideDown');
      this.classes.add('-slideTop');
    };

    const downAction = () => {
      this.classes.remove('-slideTop');
      this.classes.remove('-slideDown');
      this.classes.add('-slideUp');
    };

    const upAction = () => {
      this.classes.remove('-slideTop');
      this.classes.remove('-slideUp');
      this.classes.add('-slideDown');
    };

    // Attach the scroll event handler
    window.addEventListener('scroll', () => {
      scrollDetect(homeAction, downAction, upAction);
    });
  }

  // Navbar Transparency
  // =========================================================================
  handleNavbarTransparency() {
    // Add or remove scrolling navbar classes
    window.addEventListener('scroll', () => {
      const nav = this.header.querySelector('nav');

      if (50 < window.scrollY) {
        nav.classList.add('is-transparent');
      } else {
        nav.classList.remove('is-transparent');
      }
    });
  }

  // Mega Menu Accessibility Toggle
  // =========================================================================
  handleMegaMenu() {
    const triggers = this.header.querySelectorAll('[data-trigger-megamenu]');

    triggers.forEach((trigger) => {
      const menu = trigger.parentElement.querySelector('.c-mega-menu');
      let hideTimeout;

      const showMenu = () => {
        clearTimeout(hideTimeout);
        if (menu) {
          menu.classList.add('is-visible');
          menu.classList.remove('is-hidden');
          menu.setAttribute('aria-hidden', 'false');
          trigger.setAttribute('aria-expanded', 'true');
        }
      };

      const hideMenu = () => {
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
          if (menu) {
            menu.classList.remove('is-visible');
            menu.classList.add('is-hidden');
            menu.setAttribute('aria-hidden', 'true');
            trigger.setAttribute('aria-expanded', 'false');
          }
        }, 150); // debounce delay
      };

      // // Hover
      // trigger.parentElement.addEventListener('mouseenter', showMenu);
      // trigger.parentElement.addEventListener('mouseleave', hideMenu);

      // Keyboard focus
      trigger.addEventListener('focus', showMenu);
      trigger.addEventListener('blur', hideMenu);

      // // Add mobile click toggle
      // trigger.addEventListener('click', (e) => {
      //   const isMobile = window.innerWidth < 768;
      //   if (!isMobile) return;

      //   const menu = trigger.parentElement.querySelector('.c-mega-menu');

      //   if (menu) {
      //     e.preventDefault();

      //     const isOpen = menu.classList.contains('is-visible');

      //     // Close all others first (optional)
      //     const allMenus = this.header.querySelectorAll('.c-mega-menu');
      //     const allTriggers = this.header.querySelectorAll('[data-trigger-megamenu]');
      //     allMenus.forEach(m => m.classList.remove('is-visible', 'is-hidden'));
      //     allTriggers.forEach(t => t.setAttribute('aria-expanded', 'false'));

      //     if (!isOpen) {
      //       menu.classList.add('is-visible');
      //       menu.classList.remove('is-hidden');
      //       menu.setAttribute('aria-hidden', 'false');
      //       trigger.setAttribute('aria-expanded', 'true');
      //     }
      //   }
      // });

      // Optional: Close on ESC
      if (menu) {
        menu.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            clearTimeout(hideTimeout);
            hideMenu();
            trigger.focus();
          }
        });
      }
    })
  }

  // Toggle Primary Nav
  // =========================================================================
  togglePrimaryNav() {
    // Find sit elements
    const siteContainer = document.querySelector('.o-site');

    // Set classes to "open"
    this.header.classList.toggle('is-active');
    this.navigation.classList.toggle('is-visible');
    this.menu.classList.toggle('is-hidden');
    this.toggleMenu.classList.toggle('open');
    siteContainer.classList.toggle('-activeNavigationAreaUpTopButNotWhenScrolling');

    // On open: collapse all megamenus
    if (!this.header.classList.contains('is-active')) {
      const allMegamenus = this.header.querySelectorAll('.c-mega-menu');
      const allTriggers = this.header.querySelectorAll('[data-trigger-megamenu]');

      allMegamenus.forEach(menu => {
        menu.classList.remove('is-visible');
        menu.classList.add('is-hidden');
        menu.setAttribute('aria-hidden', 'true');
      });

      allTriggers.forEach(trigger => {
        trigger.setAttribute('aria-expanded', 'false');
      });
    }
  }

  // Mobile Dropdown Submenus Toggle
  // =========================================================================
  handleMobileDropdowns() {
    const isMobile = () => window.innerWidth < 768;
    const toggles = this.header.querySelectorAll('[data-toggle^="primary__sub-"]');

    toggles.forEach((toggle) => {
      const targetId = toggle.getAttribute('data-toggle');
      const targetMenu = this.header.querySelector(`#${targetId}`);

      // Safety check
      if (!targetMenu) return;

      // Attach click listener
      toggle.addEventListener('click', (e) => {
        if (!isMobile()) return;

        e.preventDefault();

        const isOpen = targetMenu.classList.contains('is-visible');

        // Optional: Close all other submenus
        const allSubmenus = this.header.querySelectorAll('.c-submenu');
        allSubmenus.forEach((submenu) => {
          submenu.classList.remove('is-visible');
          submenu.classList.add('is-hidden');
          submenu.setAttribute('aria-hidden', 'true');
        });

        // Toggle current
        if (!isOpen) {
          targetMenu.classList.add('is-visible');
          targetMenu.classList.remove('is-hidden');
          targetMenu.setAttribute('aria-hidden', 'false');
        } else {
          targetMenu.classList.remove('is-visible');
          targetMenu.classList.add('is-hidden');
          targetMenu.setAttribute('aria-hidden', 'true');
        }
      });
    });
  }

  // Destroy
  // =========================================================================
  destroy() {}
}
