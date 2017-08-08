# dlbr-pwa

**Requires Node.js 8+**

``` bash
# install dependencies
$ npm i

$ cat > .env << EOL
CONTENTFUL_SPACE=
CONTENTFUL_ACCESS_TOKEN=
CONTENTFUL_WEBHOOK_USERNAME=
CONTENTFUL_WEBHOOK_PASSWORD=
EOL

# serve in dev mode, with hot reload at localhost:5000
$ npm run dev

# build for production
$ npm run build

# serve in production mode
$ npm start
```

### License

The MIT License ([MIT](https://github.com/daliborgogic/dlbr-pwa/blob/master/LICENSE))

Copyright (c) 2017 Dalibor Gogic

