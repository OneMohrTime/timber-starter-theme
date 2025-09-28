<?php
/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 */

// Load Composer dependencies.
require_once __DIR__ . '/vendor/autoload.php';

require_once __DIR__ . '/src/StarterSite.php';

Timber\Timber::init();

// Sets the directories (inside your theme) to find .twig files.
Timber::$dirname = [ 'templates', 'views' ];

// Register ACF blocks located in the /blocks directory only if Classic Editor is NOT active
if (!function_exists('is_plugin_active')) {
    require_once ABSPATH . 'wp-admin/includes/plugin.php';
}
if (!is_plugin_active('classic-editor/classic-editor.php')) {
    require_once __DIR__ . '/src/TimberBlocks.php';
}

new StarterSite();
