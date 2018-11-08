<?php

if ( ! function_exists( 'wsf_setup' ) ) :

    function wsf_setup() {

        load_theme_textdomain( 'wsf', get_template_directory() . '/languages' );

        add_theme_support( 'title-tag' );

        add_theme_support( 'post-thumbnails' );
        set_post_thumbnail_size(false);

        register_nav_menus( array(
            'header' => __( 'Header menu', 'wsf' ),
            'footer' => __( 'Footer menu', 'wsf' )
        ) );

        add_theme_support( 'html5', array(
            'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
        ) );

        add_theme_support( 'post-formats', array(
            'aside', 'image', 'video', 'quote', 'link', 'gallery', 'status', 'audio', 'chat'
        ) );
    }
endif;
add_action( 'after_setup_theme', 'wsf_setup' );

remove_action ('wp_head', 'wp_generator');
remove_filter('the_content', 'wptexturize');

function remove_admin_bar(){ return false; }
add_filter( 'show_admin_bar' , 'remove_admin_bar');

add_action( 'wp_ajax_do_something',        'do_something_callback' );
add_action( 'wp_ajax_nopriv_do_something', 'do_something_callback' );
function do_something_callback(){

	$name = $_POST['name'];
	$phone = $_POST['phone'];
    $subject = $_POST['subject'] ? $_POST['subject'] : 'Обратный звонок';

	$to      = 'info@domain';
	$message = "Имя: $name<br>Телефон: $phone";

	$header = "From: domain@info.com\r\n";
	$header.= "MIME-Version: 1.0\r\n";
	$header.= "Content-Type: text/html; charset=utf-8\r\n";
	$header.= "X-Priority: 1\r\n";

	mail($to, $subject, $message, $header);
	wp_die();
}

function wsf_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Widget Area', 'wsf' ),
		'id'            => 'sidebar-1'
	) );
}
add_action( 'widgets_init', 'wsf_widgets_init' );

function wsf_scripts() {

	// Stylesheets
    wp_enqueue_style( 'normalize', 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css', false, '8.0.0' );
    wp_enqueue_style( 'style', get_stylesheet_uri(), false, 1.0 );
    wp_enqueue_style( 'slick-style', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css', false, '1.9.0' );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
	
	// Scripts
	wp_enqueue_script( 'wsf-script', get_template_directory_uri() . '/assets/js/functions.min.js', array( 'jquery' ), '1', true );
    wp_enqueue_script('slick-js', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js', array('jquery'), '1.9.0', TRUE);
}
add_action( 'wp_enqueue_scripts', 'wsf_scripts' );

// .html to url
add_action('init', 'htmlPage_permalink', -1);
function htmlPage_permalink() {
    global $wp_rewrite;

    if( ! strpos( $wp_rewrite->get_page_permastruct(), '.html') ){
        $wp_rewrite->page_structure = $wp_rewrite->page_structure . '.html';
    }
}

add_filter('single_template', 'check_for_category_single_template');
function check_for_category_single_template( $t ){
    foreach( (array) get_the_category() as $cat ){
        if ( file_exists(TEMPLATEPATH . "/single-{$cat->slug}.php") ) return TEMPLATEPATH . "/single-{$cat->slug}.php";
        if($cat->parent){
            $cat = get_the_category_by_ID( $cat->parent );
            if ( file_exists(TEMPLATEPATH . "/single-{$cat->slug}.php") ) return TEMPLATEPATH . "/single-{$cat->slug}.php";
        }
    }
    return $t;
}

//remove emoji
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );

add_filter( 'site_transient_update_plugins', 'filter_plugin_updates' );
function filter_plugin_updates( $value ) {
    unset( $value->response['advanced-custom-fields-pro-5.6.9/acf.php'] );
    return $value;
}