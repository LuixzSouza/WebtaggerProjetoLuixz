<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'r#mVz!oR-Pl.Pa*#K,CYEQ)Bk,JfrK@Vn)GgoOx.%gPn [Sm-P}:JnLOJv&qVWlK' );
define( 'SECURE_AUTH_KEY',   'n-<c,Rq&PG6ZI}y^8%=SBKPh4edRG2PESf8:Fd_UF@g1BE<<FGM5no&u*f6Pc(_n' );
define( 'LOGGED_IN_KEY',     'm+4?h.f+B~% Br2>L!SArOj4Ot;y|qx)z5`c+fp(W0>!WX4rC]sDsuRNl4@rt6T6' );
define( 'NONCE_KEY',         '.WQc;!Wo7[StN6xRpEiaY3IpA/Mbd}d0fgfTU;n9GK!-WAY$c;t8QK+Bl+k>kb5]' );
define( 'AUTH_SALT',         's1|uu3YtaHQ1_Z/#DFm>e!fZTRun{-?DzV}0(aFK}@|B_//N6G{}X=$k3.x8Keg`' );
define( 'SECURE_AUTH_SALT',  'D)9emQINQ<GHrcgotZe/vE%9roj$[ILmWF!w%p3i85t0fe^Shc|Z@URX?pdnUl$m' );
define( 'LOGGED_IN_SALT',    '4dMNr-91B4gMoc@NEqF)GpucBbvh*9IIG:oQ$iCC,QrbS~|ela9(MKL[HNVGXE1b' );
define( 'NONCE_SALT',        '?atd3Wr!@4I;-SQ`3|4^XxNHW5 m]0:-oCHFTF,.S>Z=>NX`:$*OsJ$]|&Z.?v~I' );
define( 'WP_CACHE_KEY_SALT', '#(N]4[554j_VIKzsK}ejwrzTm`t@K?6-Jgf[<TqP5K=Bi&./-EMg^(gvfN/Pdbza' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
