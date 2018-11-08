<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'comfort-db');

/** Имя пользователя MySQL */
define('DB_USER', 'comfort-user');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '5C2g3Z3j');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/** Тема по умолячанию */
define('WP_DEFAULT_THEME', 'wsf');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'l^rN<?bV;|cA<~`=-JCXD.!!y17%o%$%]X^(;/[2lT+hj^9|`q-w7k }HVnBtXcD');
define('SECURE_AUTH_KEY',  '!z]n=/;MvqE_-ge/,II7B&ng53HJJ0+]1YCM50hX9LQw)4?pe-105#61$K2+sP^#');
define('LOGGED_IN_KEY',    '%l5~$j#q7HxkTI.b^[Xz~uziuX]V%GQB#glSl`3EAIW>==YuU=)hPg YJ}v;$-2f');
define('NONCE_KEY',        'l`[N?2g]RUK2%m*+c#=I!w6^!DPKAKpCU*7Q{yP<!b6;4vCT?9F;.|n+o+/#!suD');
define('AUTH_SALT',        '>S4M:[7,V@Zo(#ds[`@We2v~0}Tn>)Xz*XEh&~CV1~im-mklk9,9y74`,S7 ^w)%');
define('SECURE_AUTH_SALT', 'u;mxI}z9Xy!%&b:QPRbHj6)sd`7&&n;{K<<_UF]g4iUJxeD-t|>]J~JeCp-uZtq=');
define('LOGGED_IN_SALT',   'c_@tN@sL^5HfU/_sJ0H9D<JCXwX0yw$VZ4WzA@ 6K$4W4N_9V2.7ZM!&E94HCa<V');
define('NONCE_SALT',       'BwK/w|vGscnuWhBkg.P1-Vv6dOd>Bact_oC33nC(s4ixz&phgM a9IC<d>pco@rR');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
