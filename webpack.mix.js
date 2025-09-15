/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

const mix  = require('laravel-mix');
const fs   = require('fs');
const path = require('path');

let PATHS = {
    node: './node_modules',
    src: './wp-content/themes/timber-starter-theme/src',
    dist: './wp-content/themes/timber-starter-theme/assets',
    blocks: './wp-content/themes/timber-starter-theme/blocks',
    docs: './docs',
    proxy: 'https://timber-wordpress.ddev.site'
};

mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.jsx'],
    },
});

// Dynamically compile block styles
const blockDirs = fs.readdirSync(PATHS.blocks, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

blockDirs.forEach(block => {
    const scssPath = path.join(PATHS.blocks, block, `${block}.scss`);
    const cssOutput = path.join(PATHS.blocks, block);
    if (fs.existsSync(scssPath)) {
        mix.sass(scssPath, cssOutput);
    }
});

mix
    .sourceMaps(false, 'source-map')
    // .copyDirectory(`${PATHS.node}/@fortawesome/fontawesome-free/webfonts`, `${PATHS.dist}/fonts`)
    .copyDirectory(`${PATHS.src}/images`, `${PATHS.dist}/img`)
    // .copy(`${PATHS.src}/fonts/*`, `${PATHS.dist}/fonts`)
    // .copy(`${PATHS.node}/swiper/dist/js/swiper.js`, `${PATHS.dist}/js`)
    .js(`${PATHS.src}/scripts/app.js`, `${PATHS.dist}/js/`)
    .sass(`${PATHS.src}/styles/app.scss`, 'css')
    .copy(`${PATHS.dist}/css/`, `${PATHS.docs}/assets/css`)
    .copy(`${PATHS.dist}/js/`, `${PATHS.docs}/assets/js`)
    .options({
        processCssUrls: false
    })
    .setPublicPath(`${PATHS.dist}`);
