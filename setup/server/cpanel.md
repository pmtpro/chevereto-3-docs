# cPanel

This guide will enable you to install Chevereto-Free on cPanel from scratch.

## Database

Go to the **MySQL Database Wizard** under **Databases**.

![databases](../../src/screen/cpanel/databases.png)

Follow the process to create a database and its user. Take note on the MySQL **database name**, **username** and **password**.

![MySQL wizard create](../../src/screen/cpanel/mysql-wizard-create-database.png)

Grant `ALL PRIVILEGES` on the newly created database and user.

![MySQL wizard privileges](../../src/screen/cpanel/mysql-wizard-privileges.png)

## Chevereto-Free Files

* Go to **File Manager** under **Files**.

![Files](../../src/screen/cpanel/files.png)

* Navigate to your website `public_html/` directory.

![File Manager](../../src/screen/cpanel/file-manager.png)

* Click on **Upload** and on **Select File** upload the release zip file downloaded from [rodber/chevereto-free/releases](https://github.com/rodber/chevereto-free/releases)
* Once uploaded, go back to the file manager at `public_html/` directory.
* Right-click on the zip file file and select **Extract**.

![File Manager Extract](../../src/screen/cpanel/file-manager-extract.png)

* A prompt appears, click on **Extract Files**

![File Manager Extract Files](../../src/screen/cpanel/file-manager-extract-files.png)

* Delete the zip file when the extraction completes.

![File Manager Delete File](../../src/screen/cpanel/file-manager-delete-file.png)

## PHP

Go to **MultiPHP INI Editor** under **Software**.

![Software](../../src/screen/cpanel/software.png)

Select your website under **Configure PHP INI basic settings**.

![MultiPHP INI editor](../../src/screen/cpanel/mutliphp-ini-editor.png)

Take note on the following configurable keys:

![MultiPHP INI keys](../../src/screen/cpanel/multiphp-ini-keys.png)

* `max_execution_time` 30
* `memory_limit` 256M (min)
* Use `post_max_size` and `upload_max_filesize` to limit the file upload max. size allowed for uploads

Go to **MultiPHP Manager** and select `PHP 7.4` for your website.

![MultiPHP manager](../../src/screen/cpanel/multiphp-manager.png)

* From here you can also enable the [extensions required](requirements.md#php-extensions) by Chevereto.

::: danger PHP Extensions
Refer to the cPanel [PHP Extensions and Applications Package](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/) and WHM [How to install a PHP extension in WHM](https://support.cpanel.net/hc/en-us/articles/360050971633) documentation if your cPanel provisioning lacks the extensions required by Chevereto-Free.
:::

## Install Chevereto-Free

Go to `http://your_website/` and follow the instructions to the create the admin account.

## PHP Versioning

::: tip Did you know?
cPanel uses root `.htaccess` file to add rules that enable to override the default cPanel PHP versioning. This may cause issues in your Chevereto-Free installation.
:::

If you have PHP versioning issues make sure that the root `.htaccess` file contains the following:

<code-group>
<code-block title="Apache">
```apacheconf
<IfModule mime_module>
  AddHandler application/x-httpd-ea-php74 .php .php7 .phtml
</IfModule>
```
</code-block>

<code-block title="LiteSpeed">
```apacheconf
<IfModule mime_module>
  AddHandler application/x-httpd-ea-php74___lsphp .php .php7 .phtml
</IfModule>
```
</code-block>
</code-group>

> Note that the configuration in your system may vary. Double-check with your service provider.

## Setup Email

* Refer to: [Setup Email](../../manual/first-steps/setup-email.md)
