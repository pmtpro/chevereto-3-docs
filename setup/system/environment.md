# System Environment

These are the system level settings that can be used to tweak Chevereto-Free provisioning.

## Passing values

To pass settings to Chevereto-Free is recommended to use system level environment variables.

::: tip Settings file
If is not possible to use environment variables you can use the [settings file](../server/settings-file.md) to configure the Chevereto-Free variables.
:::

### Apache HTTP Web Server (PHP module)

If PHP is provided using `mpm_prefork` you must refer to the documentation on [Apache HTTP Server environment variables](https://httpd.apache.org/docs/current/env.html). You may check our real use cases at [chevereto/vultr-marketplace](https://github.com/chevereto/vultr-marketplace/blob/main/files/var/lib/cloud/scripts/per-instance/provision.sh).

### Other setups

For these you will be running [PHP-FPM](https://www.php.net/manual/en/install.fpm.configuration.php) so you can add those settings at your `php-fpm.conf` file.

### Application servers

For these you will be running PHP CLI so you should be able to pass those at `php.ini` for your CLI. You can also `export` those in your shell. Refer to the documentation of each application server for the best way to pass those to Chevereto.

### Container

Pass the environment variables to the container run command or at `docker compose` layer.

## Database variables

Environment variables for the database details.

| Variable                  | Setting Key     | Example                  |
| ------------------------- | --------------- | ------------------------ |
| CHEVERETO_DB_DRIVER       | db_driver       | mysql                    |
| CHEVERETO_DB_HOST         | db_host         | mariadb                  |
| CHEVERETO_DB_NAME         | db_name         | chevereto                |
| CHEVERETO_DB_PASS         | db_pass         | user_database_password   |
| CHEVERETO_DB_PDO_ATTRS    | db_pdo_attrs    | `{"key":"value"}` (json) |
| CHEVERETO_DB_PORT         | db_port         | `3306`                   |
| CHEVERETO_DB_TABLE_PREFIX | db_table_prefix | chv_                     |
| CHEVERETO_DB_USER         | db_user         | chevereto                |

## Debug variables

Environment variables for [debug](../troubleshoot/debug.md).

::: tip
When using Docker it logs to `/dev/stderr` regardless this configuration.
:::

| Variable              | Setting Key | Example                      |
| --------------------- | ----------- | ---------------------------- |
| CHEVERETO_DEBUG_LEVEL | debug_level | `1`                          |
| CHEVERETO_ERROR_LOG   | error_log   | /var/log/chevereto-error.log |

## Session variables

Environment variables for the session driver.

| Variable                       | Setting Key          | Example              |
| ------------------------------ | -------------------- | -------------------- |
| CHEVERETO_SESSION_SAVE_HANDLER | session.save_handler | `redis` `files`      |
| CHEVERETO_SESSION_SAVE_PATH    | session.save_path    | `tcp://redis` `/tmp` |

## Image handling variables

Environment variables for controlling image handling.

| Variable                          | Setting Key             | Example                          |
| --------------------------------- | ----------------------- | -------------------------------- |
| CHEVERETO_IMAGE_FORMATS_AVAILABLE | image_formats_available | `'JPG','PNG','BMP','GIF','WEBP'` |
| CHEVERETO_IMAGE_LIBRARY           | image_library           | `imagick` `gd`                   |

## Hostname variables

Environment variables for the hostname configuration.

| Variable                | Setting Key   | Example       |
| ----------------------- | ------------- | ------------- |
| CHEVERETO_HOSTNAME      | hostname      | chevereto.loc |
| CHEVERETO_HOSTNAME_PATH | hostname_path | /             |
| CHEVERETO_HTTPS         | https         | `true`        |

## System context variables

Environment variables for the context where Chevereto system is being provided. Depending on where you run it, you may want to disable sensitive functionality.

| Variable                        | Setting Key         | Example |
| ------------------------------- | ------------------- | ------- |
| CHEVERETO_DISABLE_PHP_PAGES     | disable_php_pages   | `false` |
| CHEVERETO_DISABLE_UPDATE_HTTP   | disable_update_http | `false` |
| CHEVERETO_DISABLE_UPDATE_CLI    | disable_update_cli  | `false` |
| CHEVERETO_ENABLE_HTACCESS_CHECK | htaccess_enforce    | `true`  |

## File upload variables

Environment variables for the file uploading limits. Note that the following environment variables will work for container provisioning.

| Variable                      | Example |
| ----------------------------- | ------- |
| CHEVERETO_UPLOAD_MAX_FILESIZE | 50M     |
| CHEVERETO_POST_MAX_SIZE       | 50M     |
| CHEVERETO_MAX_EXECUTION_TIME  | 30      |
| CHEVERETO_MEMORY_LIMIT        | 512M    |

For **non-container** based provisioning you need to change those at [php.ini configuration](./requirements.md#php-configuration).
