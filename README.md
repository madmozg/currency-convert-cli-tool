# CLI currency converter backend server

## How to use

### 1. Installing dependencies

```
npm install
```

### 2. Creating .env file
```
APP_PORT=3000
APP_SSL_PORT=443
API_URL=<api_endpoint>
DEVELOPER=1
SSL=1
SSL_DIR=/etc/letsencrypt/live/<project_name>
```

* DEVELOPER: mode will allow you to avoid certificates issues locally
* API_URL: the provider of convertion between 2 currencies
* SSL_DIR: default /etc/letsencrypt/live/<project_name>

### 3. Run your server
```
node app.js
```

### Do basic request to local server
```
curl http://localhost:3000/2000/usd/uah
```

Received results:
```
2000 US Dollar = UAH 54,114.20  
```

### Test on real server
```
curl https://cli.mconvert.net/5000/usd/btc
```

Received results:
```
5000 US Dollar = BTC 0.11  
```

Changelog

### v0.2
* Added SSL support

### v0.1 
* Added external api call to get results for converting currencies
* Added colors to results in terminal
* Added brute-force protection

Credits to:

* Colors for terminal - https://github.com/medikoo/cli-color#readme

* Currency converter website with open API - https://mconvert.net/

* Mconvert API documentation - https://api.mconvert.net/documentation
