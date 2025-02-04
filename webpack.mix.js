let mix = require('laravel-mix');

// require('laravel-mix-imagemin');

let PATHS = {
    node: './node_modules',
    src: './wp-content/themes/timber-starter-theme/src',
    dist: './wp-content/themes/timber-starter-theme/assets',
    proxy: 'https://timber-wordpress.ddev.site'
};

// var themename = "website";
// const themePath = 'wp-content/themes/' + themename + '';
// const resources = themePath + '/src';
// mix.setPublicPath(`${themePath}/assets`);

mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.jsx'],
    },
});

// mix.sass(`${resources}/scss/app.scss`, `${themePath}/assets/css`).sourceMaps();
// mix.js(`${resources}/js/app.js`, `${themePath}/assets/js`)

// mix.browserSync({
//     proxy: "https://mywebsite.test",
//     files: [
//         `${themePath}/**/*.php`,
//         `${themePath}/**/*.js`,
//         `${themePath}/**/*.css`,
//     ]
// });

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

mix
    .sourceMaps(false, 'source-map')
    // .imagemin(
    //     'images/**.*',
    //     {
    //         context: 'src',
    //     },
    //     {
    //         optipng: {
    //             optimizationLevel: 5
    //         },
    //         jpegtran: null,
    //         plugins: [
    //             require('imagemin-mozjpeg')({
    //                 quality: 100,
    //                 progressive: true,
    //             }),
    //         ],
    //     }
    // )
    // .copyDirectory(`${PATHS.node}/@fortawesome/fontawesome-free/webfonts`, `${PATHS.dist}/fonts`)
    .copyDirectory(`${PATHS.src}/images`, `${PATHS.dist}/img`)
    // .copy(`${PATHS.src}/fonts/*`, `${PATHS.dist}/fonts`)
    // .copy(`${PATHS.node}/swiper/dist/js/swiper.js`, `${PATHS.dist}/js`)
    .js(`${PATHS.src}/scripts/app.js`, `${PATHS.dist}/js/`)
    // .js(`${PATHS.src}/scripts/a11y.js`, `${PATHS.dist}/js/`)
    .sass(`${PATHS.src}/styles/app.scss`, 'css')
    .options({
        processCssUrls: false
    })
    .setPublicPath(`${PATHS.dist}`);
