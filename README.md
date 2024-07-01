# The Timber Starter Theme

The "_s" for Timber: a dead-simple theme that you can build from. The primary purpose of this theme is to provide a file structure rather than a framework for markup or styles. Configure your SASS files, scripts, and task runners however you would like!

## Installing the theme
Follow the guide on how to Install Timber using the Starter Theme.

Then,

1. Rename the theme folder to something that makes sense for your website. You could keep the name timber-starter-theme but the point of a starter theme is to make it your own!
2. Activate the theme in the WordPress Dashboard under Appearance → Themes.
3. Do your thing! And read the docs.

## The `StarterSite` class
In functions.php, we call new StarterSite();. The StarterSite class sits in the src folder. You can update this class to add functionality to your theme. This approach is just one example for how you could do it.

The src folder would be the right place to put your classes that extend Timber’s functionality.

Small tip: You can make use of Composer’s autoloading functionality to automatically load your PHP classes when they are requested instead of requiring one by one in functions.php.

## What else is there?

- assets/ is where you can keep your front-end scripts, styles, or images. In other words, your Sass files, JS files, fonts, and SVGs would live here.
- views/ contains all of your Twig templates. These pretty much correspond 1 to 1 with the PHP files that respond to the WordPress template hierarchy. At the end of each PHP template, you’ll notice a Timber::render() function whose first parameter is the Twig file where that data (or $context) will be used. Just an FYI.
- tests/ ... basically don’t worry about (or remove) this unless you know what it is and want to.

### Other Resources
- Twig for Timber Cheatsheet
- Timber and Twig Reignited My Love for WordPress on CSS-Tricks
- A real live Timber theme.