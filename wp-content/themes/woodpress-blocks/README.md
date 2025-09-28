# OneMohrTime Timber Starter Theme

## Overview
This WordPress starter theme is built on top of Timber and DDEV to provide a robust and flexible foundation for creating modern, maintainable, and performant WordPress websites. It was written by [@onemohrtime](https://github.com/OneMohrTime), with a _**LOT**_ of inspiration and education from [@bgrrtt](https://github.com/bgrrtt).

## Installation

### 1. Install full DDEV environment
Follow the instructions from the main repo [README](https://github.com/OneMohrTime/timber-starter-theme).

### 2. Admin Setup
First, activate the necessary plugins on the [Plugins](https://timber-wordpress.ddev.site/wp-admin/plugins.php) tab.
- **Required:** Advanced Custom Fields PRO
- **Required:** Classic Editor
- **Required:** Classic Widgets
- **Required:** Yoast SEO
- **Recommended:** Google Site Kit
- **Recommended:** RealFaviconGenerator
- **Recommended:** Redirection
- **Recommended:** WordPress Updater

Second, you're going to want to sync the Advanced Custom Fields, from our theme root directory `acf-json/`. This can be found within the [ACF tab](https://timber-wordpress.ddev.site/wp-admin/edit.php?post_type=acf-field-group&post_status=sync).

Update some of the website's main settings. These are not required, but are recommended—especially if you're going to be uploading this database to _production_.
- Add a favicon and choose your timezone [here](https://timber-wordpress.ddev.site/wp-admin/options-general.php)
- Set a home page and news/blog page [here](https://timber-wordpress.ddev.site/wp-admin/options-reading.php)
- Set thumbnails to _320&times;320_, uncheck _crop thumbnails ..._,<br>set medium to _768&times;768_,<br>uncheck _organize media..._ [here](https://timber-wordpress.ddev.site/wp-admin/options-media.php)
- Set permalinks to _Post Name_, or your own custom configuration [here](https://timber-wordpress.ddev.site/wp-admin/options-permalink.php)

Activate your new theme in [Appearances > Themes](https://timber-wordpress.ddev.site/wp-admin/themes.php).

## Additional Credits

The missing image placeholder is from the [Mackinaw Bridge](https://unsplash.com/photos/white-truck-on-gray-road-during-daytime-99HLgU4IHLY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) by fellow NMU Wildcat [Riley Crawford](https://unsplash.com/@ricrawfo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
