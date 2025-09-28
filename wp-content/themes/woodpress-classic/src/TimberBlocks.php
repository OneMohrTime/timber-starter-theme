<?php

/**
 * Register ACF blocks located in the /blocks directory
 */
function register_acf_blocks() {
    $blocks_dir = dirname(__DIR__) . '/blocks';
    if (!is_dir($blocks_dir)) {
        return;
    }
    foreach ($blocks = new DirectoryIterator($blocks_dir) as $item) {
        // Check if block.json file exists in each subfolder.
        if ($item->isDir() && !$item->isDot()
            && file_exists($item->getPathname() . '/block.json')
        ) {
            // Register the block given the directory name within the blocks
            // directory.
            register_block_type($item -> getPathname());
        }
    }
}
add_action('init', 'register_acf_blocks');

/**
 * ACF Block template callback
 */
function acf_block_render_callback($attributes, $content = '', $is_preview = false, $post_id = 0, $wp_block = null) {
    // Create the slug of the block using the name property in the block.json.
    $slug = str_replace( 'timber-starter-theme/', '', $attributes['name'] );

    // Include a template part from within the /blocks folder with the same nam
    $context = Timber::context();

    // Store block attributes.
    $context['attributes'] = $attributes;

    // Store field values. These are the fields from your ACF field group for the block.
    $context['fields'] = get_fields();

    // Store whether the block is being rendered in the editor or on the frontend.
    $context['is_preview'] = $is_preview;

    // Render the block.
    Timber::render(
        'blocks/' . $slug . '/' . $slug . '.twig',
        $context
    );
}

/**
 * Filters the list of allowed block types in the block editor.
 *
 * This function restricts the available block types to Heading, List, Image, and Paragraph only.
 *
 * @param array|bool $allowed_block_types Array of block type slugs, or boolean to enable/disable all.
 * @param object     $block_editor_context The current block editor context.
 *
 * @return array The array of allowed block types.
 */
function timber_block_types( $allowed_block_types, $block_editor_context ) {

    $allowed_block_types = array(
        'core/heading',
        'core/image',
        'core/list',
        'core/list-item',
        'core/paragraph',
        'timber-starter-theme/testimonial',
        'timber-starter-theme/text-media',
    );

    return $allowed_block_types;
}
add_filter( 'allowed_block_types_all', 'timber_block_types', 10, 2 );
