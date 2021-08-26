# CLI currency converter backend server

## How to use

### 1. Installing dependencies

```
npm install
```

### 2. Creating .env file
```
APP_PORT=3000
API_URL=<api-endpoint>
DEVELOPER=1
```

* DEVELOPER: mode will allow you to avoid certificates issues locally
* API_URL: the provider of convertion between 2 currencies

### 3. Run your server
```
node app.js
```

### Do basic request
```
curl http://localhost:3000/2000/usd/uah
```

Received results:
```
2000 US Dollar = UAH 54,114.20  
```

Changelog

### v0.1 
* Added external api call to get results for converting currencies
* Added colors to results in terminal
* Added brute-force protection

Credits to:

* Colors for terminal - https://github.com/medikoo/cli-color#readme

* Currency converter website with open API - https://mconvert.net/

* Mconvert API documentation - https://api.mconvert.net/documentation