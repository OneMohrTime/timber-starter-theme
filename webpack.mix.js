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

let WOODPRESS = process.env.THEME || 'woodpress-classic'; // theme comes from .env
let PATHS = {
    node:   './node_modules',
    src:    './wp-content/themes/' + WOODPRESS + '/src',
    dist:   './wp-content/themes/' + WOODPRESS + '/assets',
    blocks: './wp-content/themes/' + WOODPRESS + '/blocks',
    docs:   './docs',
    proxy:  'https://timber-wordpress.ddev.site'
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
    // Output to ./assets/css/blocks/name.css
    const cssOutput = path.join(PATHS.blocks, `${block}/${block}.css`);
    if (fs.existsSync(scssPath)) {
        mix.sass(scssPath, cssOutput);
    }
});

mix
    .sourceMaps(false, 'source-map')
    // .copyDirectory(`${PATHS.node}/@fortawesome/fontawesome-free/webfonts`, `${PATHS.dist}/fonts`)
    .copyDirectory(path.join(PATHS.src, 'images'), path.join(PATHS.dist, 'img'))
    // .copy(`${PATHS.src}/fonts/*`, `${PATHS.dist}/fonts`)
    // .copy(`${PATHS.node}/swiper/dist/js/swiper.js`, `${PATHS.dist}/js`)
    .js(path.join(PATHS.src, 'scripts/app.js'), path.join(PATHS.dist, 'js/app.js'))
    .sass(path.join(PATHS.src, 'styles/app.scss'), path.join(PATHS.dist, 'css/app.css'))
    .copy(path.join(PATHS.dist, 'css/'), path.join(PATHS.docs, 'assets/css'))
    .copy(path.join(PATHS.dist, 'js/'), path.join(PATHS.docs, 'assets/js'))
    .options({
        processCssUrls: false
    })
    .setPublicPath('.');
