# Upgrading

Upgrading to paid [Chevereto](https://chevereto.com) gets you more features and support.

> 🐳 Docker users check [chevereto/docker](https://github.com/chevereto/docker) and [chevereto/container-builder](https://github.com/chevereto/container-builder).

🤑 To upgrade to paid purchase a [Chevereto License](https://chevereto.com/pricing) (if you don't have one already 💖)

## Using Release package

The release package is a `zip` file containing the software files. Once extracted, the software is ready to be used.

👉 This method is recommended for **cPanel**, **Plesk** and other web panel users.

* Upload the [latest release](https://chevereto.com/panel/downloads) package to your server (usually in the `public_html` folder)
* Unzip the software using your server built-in `unzip` utility
* Remove the `.zip` file
* Open your target website URL and follow the instructions

## Using Composer package manager

Using Composer the update carried in CLI context. It requires:

* CLI with `curl`, `unzip`
* [Composer](https://getcomposer.org/)

👉 This method is recommended for **VPS** and machines with **CLI access**.

* Run the following command from your **Chevereto-Free project folder**:

<code-group>
<code-block title="Debian">
```sh
LICENSE=YOUR_V3_LICENSE_KEY &&
curl -f -SOJL \
    -X POST -d "nowrap" \
    -H "License: $LICENSE" \
    "https://chevereto.com/api/download/3.20" \
&& unzip chevereto*.zip \
&& rm -rf chevereto*.zip \
&& composer install \
&& chown www-data: . -R \
&& php cli.php -C install
```
</code-block>
</code-group>