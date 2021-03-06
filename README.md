# i18n-ryla
Used for internationalization of ``ExpressJS api's`` based on the ``Accept-Language`` of the headers.

# How to install
```
npm install i18n-ryla
```
Create a languages folder with localization json files and config.json

```
-node-modules
-server.js
-languages
    |
    ---> config.json
    |
    ---> en-us.json
    |
    ---> pt-br.json
```
An example of a json localization file would be:

```
// en-us.json
{
    "hello_world": "Hello World!"
}
```
```
// pt-br.json
{
    "hello_world": "Olá Mundo!"
}
```

config.json is required to have at least the default language

```
// config.json
{
    "default": "en-us" // or pt-pt, pt-br... just make sure you have the corresponding json file
}
```

In config.json we can also choose if we want to return a similar language if no language on the system is the same as that of the user. Put ``resemblance = true`` in config.json 

Example: user has only the pt-pt language and the system only pt-br and the default is en-us. In this case with the true resemblance the system returns pt-br instead of en-us.

```
// config.json
{
    "default": "en-us", // or pt-pt, pt-br... just make sure you have the corresponding json file
    "resemblance": true // optional
}
```

When you need a multilingual message, import i18n:

```
const i18n = require('i18n-ryla')

app.use(i18n.message)

app.get('/', (req, res)=>{
    res.send(req.message.hello_world)
})
```