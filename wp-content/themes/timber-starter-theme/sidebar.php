<?php
/**
 * The Template for the sidebar containing the main widget area
 *
 * @package  WordPress
 * @subpackage  Timber
 */

// $context = [
//     'dynamic_sidebar' => Timber::get_widgets('dynamic_sidebar'),
// ];

Timber::render( array( '_partials/sidebar.twig' ), $data );
