# OneMohrTime Timber Starter Template

## Overview
This WordPress starter theme is built on top of Timber and DDEV to provide a robust and flexible foundation for creating modern, maintainable, and performant WordPress websites. It was written by [@onemohrtime](https://github.com/OneMohrTime), with a _**LOT**_ of inspiration and education from [@bgrrtt](https://github.com/bgrrtt).

You can also use the [WordPress theme](/wp-content/themes/timber-starter-theme/) alone, without the environment.

## Features
- **Timber Integration:** Leverages the power of the Timber library to separate PHP and HTML, allowing for clean and readable templating using the Twig language.
- **DDEV Environment:** Easily set up your local development environment with DDEV for a seamless and containerized development experience.
- **Semantic HTML:** Ensures semantic and accessible HTML markup.
- **Responsive Design:** Includes a responsive and mobile-friendly design out-of-the-box.

## Requirements
We'll be working with the latest and greatest WordPress templating system, make sure you have:
- [WordPress 6.x](https://wordpress.org/download/)
- [Timber 2.x](https://timber.github.io/docs/v2/installation/installation/)

This project also assumes that you have:
- [PHP 8.2](https://www.php.net/manual/en/install.php)
- [Node 22.x](https://nodejs.org/en/download/package-manager) ([NPM 11.x](https://www.npmjs.com/))
- [Composer 2.x](https://getcomposer.org/doc/00-intro.md)
- [DDEV](https://ddev.com/get-started/)

It's _highly_ recommended that you have:
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) for maintaining git history
- [WP-CLI](https://wp-cli.org/) for WordPress shortcuts
- [n](https://github.com/tj/n) or [NVM](https://github.com/nvm-sh/nvm) for Node version management

## Installation

### 1. Git the Repository
```bash
git clone git@github.com:OneMohrTime/timber-starter-theme.git
cd timber-starter-theme
```

I would highly suggest having **Git Flow** installed as well. There's also a little [cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/) to explain it.
```bash
brew install git-flow # optional
git flow init -d # add the `-d` flag for 'defaults'
```

### 2. Install WordPress

#### ZIP Install
Download the latest version of WordPress from the official website. Extract the ZIP file and move the contents into the root of your project directory. We will deal with the `wp-config.php` in the **DDEV** step.

#### WP-CLI Install
If you have **WP-CLI** installed, you can quickly download and configure WordPress by running the following commands:
```bash
wp core download

# we'll be configuring the environment in DDEV, otherwise you could continue on...

# wp config create --dbname=your_db_name --dbuser=your_db_user --dbpass=your_db_password --dbhost=your_db_host
# wp db create
# wp core install --url="your_site_url" --title="Your Site Title" --admin_user="admin" --admin_password="admin_password" --admin_email="admin_email"
```

### 3. Set Up DDEV
Ensure you have [DDEV installed](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) (mine is set up through [Docker](https://docs.docker.com/desktop/install/mac-install/)). If you have a website URL in mind already, alter the first line of `.ddev/config.yaml` to be the domain name, without ".com".

```yaml
name: timber-wordpress # this will become timber-wordpress.ddev.site
```

Then, run:
```bash
ddev start
```
Your site (with the default WordPress theme) should now be viewable at `https://timber-wordpress.ddev.site`. You should also see a `wp-config-ddev.php` in the root folder. You can now continue with the WordPress installation.

### 4. Install Node.js Dependencies

Make sure you are using the version of Node.js specified in the `.n-node-version` or `.nvmrc`.
```bash
npm install
```

### 5. Install Composer Dependencies
Some developers prefer to have Timber installed as a theme dependency, so they would run this command from the theme root (ex: /wp-content/themes/my-theme/). I'm one of those developers, so run:

```bash
cd wp-content/themes/timber-starter-theme
composer install
# go back to root directory for next commands
cd ../../..
```

### 6. Install the required WordPress plugins
#### Advanced Custom Fields Pro
To install ACF Pro, first, download the ZIP file from your [ACF account](https://www.advancedcustomfields.com/my-account/view-licenses/) and install it by uploading it on the Plugins page.

#### Classic Editor & Widgets
[Classic Editor](https://wordpress.org/plugins/classic-editor/) is an official plugin maintained by the WordPress team that restores the previous (“classic”) WordPress editor and the “Edit Post” screen. It makes it possible to use plugins that extend that screen, add old-style meta boxes, or otherwise depend on the previous editor.

[Classic Widgets](https://wordpress.org/plugins/classic-widgets/) is an official plugin maintained by the WordPress team that restores the previous ("classic") WordPress widgets settings screens.

#### Yoast SEO
Automate technical SEO and make optimizing content a breeze with the most popular WordPress [SEO plugin](https://yoast.com/wordpress/plugins/seo/).

#### Additional (highly recommended)
- [Site Kit by Google](https://sitekit.withgoogle.com/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [Redirection](https://redirection.me/)
- [WordPress Importer](https://wordpress.org/plugins/wordpress-importer/)

### 7. Build!
From here, you can compile your assets with:
```bash
# Compile, watch for any changes, immediately recompile
npm run watch
# Compile for local environments. Can also be `npm run dev`
npm run development
# Compile for prodcution environments. Can also be `npm run prod` or `npm run build`
npm run production
```

### 8. Theme Setup
Follow the instructions from the [theme repo](/wp-content/themes/timber-starter-theme/) to continue your theme setup.

## Additional Credits

This repo wouldn't be possible without the ideas and opinions of [Branden Garrett](https://github.com/bgrrtt).
