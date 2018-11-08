<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>
    <meta name="viewport" content="width=device-width">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="apple-touch-icon" sizes="180x180" href="/wp-content/themes/wsf/assets/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/wp-content/themes/wsf/assets/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="194x194" href="/wp-content/themes/wsf/assets/favicon/favicon-194x194.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/wp-content/themes/wsf/assets/favicon/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/wp-content/themes/wsf/assets/favicon/favicon-16x16.png">
    <link rel="manifest" href="/wp-content/themes/wsf/assets/favicon/site.webmanifest">
    <link rel="mask-icon" href="/wp-content/themes/wsf/assets/favicon/safari-pinned-tab.svg" color="#f18438">
    <link rel="shortcut icon" href="/wp-content/themes/wsf/assets/favicon/favicon.ico">
    <meta name="apple-mobile-web-app-title" content="ЖК Comfort">
    <meta name="application-name" content="ЖК Comfort">
    <meta name="msapplication-TileColor" content="#161936">
    <meta name="msapplication-TileImage" content="/wp-content/themes/wsf/assets/favicon/mstile-144x144.png">
    <meta name="msapplication-config" content="/wp-content/themes/wsf/assets/favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <!--[if lt IE 9]>
        <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.min.js"></script>
    <![endif]-->
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<header class="header">
    <?php if( is_front_page() ) : ?>
        <img src="/wp-content/themes/wsf/assets/img/svg/logo.svg" class="header-logo" alt="Логотип <?php bloginfo('name'); ?>">
    <?php else: ?>
        <a href="<?php echo esc_url( home_url() ); ?>">
            <img src="/wp-content/themes/wsf/assets/img/svg/logo.svg" class="header-logo" alt="Логотип <?php bloginfo('name'); ?>">
        </a>
    <?php endif;
    $args = array(
        'theme_location' => 'header',
        'container'       => 'nav',
        'container_class' => 'header-nav',
        'menu_class' => 'nav-cnt'
    );
    wp_nav_menu($args);
    ?>
    <button class="menu-toggle">
        <span class="menu-point"></span>
        <span class="menu-point"></span>
        <span class="menu-point"></span>
    </button>
    <div class="header-contacts">
        <a href="tel:0675970303" class="header-tel">+380 67 597 03 03</a>
        <div class="header-cb"></div>
        <div class="bg-el">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 545.03 398.5">
                <defs>
                    <linearGradient id="a" y1="199.25" x2="545.03" y2="199.25" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#ff8632"/>
                        <stop offset="1" stop-color="#da4816"/>
                    </linearGradient>
                </defs>
                <g>
                    <path d="M207.13 0L4.41 349.88c-12.51 21.59 3.07 48.62 28 48.62H284a52.31 52.31 0 0 0 45.27-26.1L545 0z" fill="url(#a)"/>
                </g>
            </svg>
        </div>
    </div>
</header>