# Server Settings file

The file at `app/settings.php` contains the application system level settings.

::: tip Running container?
You can ignore using this file as you can pass `-e` variables on container run.
:::

```php
<?php
$settings = [
    'db_driver' => 'mysql',
    'db_host' => 'localhost',
    'db_name' => 'chevereto',
    'db_pass' => 'pass',
    'db_pdo_attrs' => [],
    'db_port' => 3306,
    'db_table_prefix' => 'chv_',
    'db_user' => 'user',
    'debug_level' => 1,
    'disable_php_pages' => false,
    'disable_update_http' => false,
    'disable_update_cli' => false,
    'error_log' => 'syslog',
    'hostname_path' => '/',
    'hostname' => 'chevereto.loc',
    'https' => true,
    'image_formats_available' => ['PNG', 'GIF', 'JPG', 'BMP', 'WEBP'],
    'image_library' => 'imagick',
    'session.save_handler' => 'files',
    'session.save_path' => '/tmp',
    'htaccess_enforce' => true,
];
```

To add or override settings simply assign the key value:

```php
<?php
$settings['key'] = 'value';
```

Check [environment](../system/environment.md) variables for more info.
