# Server Installation

To install Chevereto-Free it requires a server environment where the software and uploaded files will be served. This document outlines the generic installation process from scratch.

::: danger Using cPanel?
cPanel users are advised to check the [cPanel guide](cpanel.md).
:::

## Requirements

Before installing anything check that the target server provides the system [requirements](../server/requirements.md) to run Chevereto-Free.

## Database

### Using web panels

You can refer to the documentation for creating the MySQL database required for Chevereto-Free. Here references for the most popular panels:

* [CloudPanel Database](https://www.cloudpanel.io/docs/cloudpanel-ce/frontend-area/databases)
* [cPanel Database](https://docs.cpanel.net/cpanel/databases/mysql-databases/)
* [Plesk Database](https://docs.plesk.com/en-US/obsidian/customer-guide/website-databases/creating-databases.65157/)
* [CyberPanel Database](https://cyberpanel.net/docs/view-and-manage-databases-table-from-cloud-platform/)

### Using the MySQL console

Run the following command to create the `chevereto` database and its user binding:

```sh
sudo mysql -uroot -ppassword -e "CREATE DATABASE chevereto; \
    CREATE USER 'chevereto' IDENTIFIED BY 'user_database_password'; \
    GRANT ALL ON chevereto.* TO 'chevereto' IDENTIFIED BY 'user_database_password';"
```

## Provide application files

::: tip
When providing files to your server make sure that the files `owner:group` permissions are usable by the Web Server user.
:::

You will require to provide the Chevereto-Free software application files to your server.

### Composer-based installation

* Requires [Composer](https://getcomposer.org)

```sh
composer create-project rodber/chevereto-free . \
    --repository='{
        "url": "https://github.com/rodber/chevereto-free.git",
        "type": "vcs"
    }' \
    --remove-vcs \
    --ignore-platform-reqs
```

### Zip package

* Upload the [latest release](https://github.com/rodber/chevereto-free/releases) package to your server (usually in the `public_html` folder)
* Unzip the software using your server built-in `unzip` utility
* Remove the `.zip` file
* Open your target website URL and follow the instructions

## Post-Install

Refer to [Initial setup](../../manual/first-steps/initial-setup.md) instructions.
