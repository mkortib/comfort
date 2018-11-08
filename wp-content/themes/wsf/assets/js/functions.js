( function( $ ) {

    $(document).ready(function () {

        var $windWidth = $(window).width();

        if ($windWidth <= 1280) {
            var $menuItem = $('.nav-cnt > .menu-item');
            $('.nav-cnt').append('<div class="hide-menu"></div>');
            $menuItem.slice(3).appendTo('.hide-menu');
        }

        var $main = $('.main-slider');

        $main.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            rows: 0,
            dots: true,
            customPaging: function(slider, i) {
                $(slider.$slides[i]).data();
                return '<button>' + '0' + (i + 1) + '</button>';
            },
            prevArrow: false,
            nextArrow: '<button type="button" class="slick-next"></button>',
            fade: true,
            cssEase: 'linear',
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000
        });

        $('form :submit').on('click', function () {
            $('input:required').each(function () {
                if (!$(this).val()) $(this).addClass('incomplete');
            });
        });

        $('input:required').on('input', function () {
            $(this).removeClass('incomplete');
        });

       /* $('input.phone').mask("+38 (999) 999-9999", {
            completed: function () {
                $(this).removeClass('incomplete');
            }
        });*/

        $('input.name').on('input', function () {
            $(this).val($(this).val().replace(/[0-9\\/^$.|?*+\-_()]/g, ""));
        });

        $('.popup form').on('submit', function (e) {

            e.preventDefault();
            $form = '.'+$(this).attr('class').split(' ').join('.');

            $.ajax({
                type: "POST",
                url: '/wp-admin/admin-ajax.php',
                data: {
                    action: 'do_something',
                    name: $(this).find('.name').val(),
                    phone: $(this).find('.phone').val(),
                    subject: $(this).find('.subject').val()
                },
                beforeSend: function () {
                    $($form+' :submit').remove();
                },
                success: function () {
                    $($form).html('<p class="success-request">Спасибо за заявку!<br>Наш менеджер свяжется с Вами в ближайшее время!</p>');
                }
            });
        });

    });

    $(window).load(function () {

        $('.loader-wrap').remove();

    });

} )( jQuery );
