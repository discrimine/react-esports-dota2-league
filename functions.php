<?php
/**
 * Register the /wp-json/acf/v3/posts endpoint so it will be cached.
 */
function wprc_add_sportspress_posts_endpoint( $allowed_endpoints ) {
    if ( ! isset( $allowed_endpoints[ 'sportspress/v2' ] ) ||
        ! in_array( 'seasons', $allowed_endpoints[ 'sportspress/v2' ] ) ) {
        $allowed_endpoints[ 'sportspress/v2' ][] = 'seasons';
    }
    if ( ! isset( $allowed_endpoints[ 'sportspress/v2' ] ) ||
        ! in_array( 'teams', $allowed_endpoints[ 'sportspress/v2' ] ) ) {
        $allowed_endpoints[ 'sportspress/v2' ][] = 'teams';
    }
    if ( ! isset( $allowed_endpoints[ 'sportspress/v2' ] ) ||
        ! in_array( 'lists', $allowed_endpoints[ 'sportspress/v2' ] ) ) {
        $allowed_endpoints[ 'sportspress/v2' ][] = 'lists';
    }
    if ( ! isset( $allowed_endpoints[ 'sportspress/v2' ] ) ||
        ! in_array( 'tables', $allowed_endpoints[ 'sportspress/v2' ] ) ) {
        $allowed_endpoints[ 'sportspress/v2' ][] = 'tables';
    }
    if ( ! isset( $allowed_endpoints[ 'sportspress/v2' ] ) ||
        ! in_array( 'events', $allowed_endpoints[ 'sportspress/v2' ] ) ) {
        $allowed_endpoints[ 'sportspress/v2' ][] = 'events';
    }
    return $allowed_endpoints;
}
add_filter( 'wp_rest_cache/allowed_endpoints', 'wprc_add_sportspress_posts_endpoint', 10, 1);