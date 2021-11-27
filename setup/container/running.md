# Container Running

## Persistent layers

### Asset storage

`todo`

### Sessions

For persistent sessions you can use Redis by configuring the [Session environment variables](../system/environment.md#session-variables) variables.

### Database

For database you can create a volume for persistence, or use a server over the network. If you manual provide the database you will need to create its user binding:

```sh
docker exec chv-mariadb mysql -uroot -ppassword -e "CREATE DATABASE chevereto; \
    CREATE USER 'chevereto' IDENTIFIED BY 'user_database_password'; \
    GRANT ALL ON chevereto.* TO 'chevereto' IDENTIFIED BY 'user_database_password';"
```

### User uploads storage

`todo`  

## Compose

::: tip
Check [Environment](../system/environment.md) for the `-e` options you can pass in the Docker command.
:::

## First run

Refer to [First-steps](../../manual/first-steps/README.md) instructions.
