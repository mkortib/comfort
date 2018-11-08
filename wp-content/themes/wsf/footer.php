<?php if( !is_front_page() ): ?>
    <footer class="footer">

    </footer>
<?php else: ?>
    <footer class="footer footer-main">
        <a href="#" class="social-lnk social-lnk_i"></a>
        <a href="#" class="social-lnk social-lnk_fb"></a>
        <p class="footer-txt footer-txt_m txt">Соцсети</p>
    </footer>
<?php endif; ?>
    <div class="popup_overlay">
        <div class="popup">
            <div class="close"></div>
            <div class="caption">Заполните все поля<br>и ожидайте звонка</div>

            <form>
                <input type="text" name="name" class="name" placeholder="Ваше имя">
                <input type="text" name="phone" class="phone" placeholder="Номер телефона" required>
                <input type="hidden" class="subject">
                <input type="submit" value="ЗАКАЗАТЬ ЗВОНОК" class="submit">
            </form>
        </div>
    </div>

    <div class="loader-wrap">
        <div class="loader">
            <span class="loader-itm"></span>
            <span class="loader-itm"></span>
            <span class="loader-itm"></span>
            <span class="loader-itm"></span>
            <span class="loader-itm"></span>
            <span class="loader-itm"></span>
        </div>
    </div>

    <?php wp_footer(); ?>

    </body>
</html>