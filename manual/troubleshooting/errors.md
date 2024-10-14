# Errors

Application errors can be caused by several causes and understanding in which layer the error is affecting the system will drive towards an easy outcome. Kindly understand that in multi-layered systems like Chevereto-Free is crucial to understand when an error is caused by Chevereto-Free or when the problem is elsewhere.

## Stack Trace

Code below shows an example error stack trace. It describes the error, provide its unique errorId and it shows the call stack.

```txt
Aw, snap! Internal Server Error [debug @ error_log] - https://chevereto.com/go/v3debug

** errorId #dacb7f96fb9fd28d **
>> PDOException [2002]: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo failed: Name or service not known
At /lib/G/classes/class.db.php:66

>> PDOException [0]: PDO::__construct(): php_network_getaddresses: getaddrinfo failed: Name or service not known
At /lib/G/classes/class.db.php:66

Stack trace:
#0 /lib/G/classes/class.db.php(66): PDO->__construct()
#1 /lib/G/classes/class.db.php(80): G\\DB->__construct()
#2 /app/loader.php(58): G\\DB::getInstance()
#3 /index.php(20): include_once('/app/loader.php')
```

## It is Chevereto-Free related?

Chevereto-Free exists on top of many technologies working at the same time and any component of this stack could fail.

It is likely that Chevereto-Free **won't cause** the following issues:

* Unable to connect (network issues)
* MySQL server gone
* CORS (missing icons, fonts)
* Cookies/Sessions not working (permissions)
* Restricted functions (`set_time_limit`)
* Server restrictions (`mod_security`)

## Common errors

### HTTP 500 Internal Server Error

This is a generic error response emitted by the web server layer and this it indicates the existence of an error, but it doesn't specify any concrete explication for it.

As these errors may spawn in any layer, it is recommended to check the system error log device (read [accessing logs](debug.md#accessing-logs) to learn how-to).

::: warning Debugging HTTP 500 error
This errors need to be debugged in the web-server layer, which will vary depending on the web server software being used. Refer to your web server provisioning documentation.
:::

Once you get the error you can solve the situation in your own context or use that information to request [support](https://chevereto.com/support) from us.

### Aw, snap! Internal Server Error

```txt
Aw, snap! Internal Server Error - Check your error_log or enable debug_mode = 3
```

This message indicates an error caught by Chevereto-Free, but hidden due to **production error reporting** settings. To actually know what is going on you have to [debug](./debug.md).

### Database messages

::: danger Dumped update query
If at `/install` you see a plain text message starting with `#Dumped update query` it means that you **MUST** manual run the printed queries in your MySQL console.
:::

If [dump update query](../../settings/system.md#dump-update-query) setting is **enabled** or if the images table has **more than 1,000,000** records, Chevereto-Free will dump the SQL statements required to carry the database update which must run direct in the MySQL console.

Chevereto-Free has this functionality to minimize breaking your large database as the process could take several minutes to complete.

When manual updating the database keep the following considerations:

* Disconnect all peers
* Turn off the MySQL server, work in its console (phpMyAdmin, Adminer, CLI)
* Run the MySQL statements one-by-one (a semi-colon `;` denotes when a MySQL statement ends)
