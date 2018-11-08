<?php
/** *
 * @package WordPress
 * @subpackage wsf
 * @since wsf 2.0
 */
get_header(); ?>

<main class="wrap main" role="main">
    <div class="last-action-wrap">
        <div class="last-action">
            <p class="action-title">Акция</p>
            <?php
            $recent_posts = wp_get_recent_posts(
                array(
                    'numberposts' => 1,
                    'category' => 3
                ));

            foreach ( $recent_posts as $recent ) {
                $txt = get_the_excerpt();
                $link = get_permalink();
            }
            wp_reset_query(); ?>
            <p class="action-desc"><?php echo $txt; ?></p>
            <a href="<?php echo $link; ?>" class="btn btn-white btn-action">Смотерть</a>
        </div>
    </div>
    <div class="main-slider">
        <div class="slider-itm">
            <div class="slide-cnt">
                <p class="slide-title">ЖК "КОМФОРТ"</p>
                <p class="slide-txt">Новый жилой комплекс комфорт класса, выдержанный в стиле современной европейской архитектуры!</p>
            </div>
        </div>
        <div class="slider-itm">
            <div class="slide-cnt">
                <p class="slide-title">ЖК "КОМФОРТ"</p>
                <p class="slide-txt">Новый жилой комплекс комфорт класса, выдержанный в стиле современной европейской архитектуры!</p>
            </div>
        </div>
        <div class="slider-itm">
            <div class="slide-cnt">
                <p class="slide-title">ЖК "КОМФОРТ"</p>
                <p class="slide-txt">Новый жилой комплекс комфорт класса, выдержанный в стиле современной европейской архитектуры!</p>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
