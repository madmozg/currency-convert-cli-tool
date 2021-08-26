const express = require('express')
const axios = require('axios')
const clc = require("cli-color")
const http = require('http')
const https = require('https')
const fs = require('fs');

var ExpressBrute = require('express-brute');
var store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
var bruteforce = new ExpressBrute(store);

require('dotenv').config()

// Defining app
const app = express()
const port = process.env.APP_PORT;
const sslport = process.env.APP_SSL_PORT;

// SSL Config
if(process.env.SSL == 1) {
    options = {
        cert: fs.readFileSync(process.env.SSL_DIR + 'fullchain.pem'),
        key: fs.readFileSync(process.env.SSL_DIR + 'privkey.pem')
    }
}

app.get('/:amount/:from/:to', bruteforce.prevent, (req, res) => {
    data = req.params

    const httpsAgent = new https.Agent({
        rejectUnauthorized: process.env.DEVELOPER ? false : true,
    })

    axios.get(process.env.API_URL + data.amount + '/' + data.from + '/' + data.to, { httpsAgent })
    .then(function (response) {
        // Making a beauty currency amount response
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: response.data.to_short,
        });
        res.send(`${clc.red(response.data.amount)} ${clc.yellow(response.data.from_name)} = ${clc.green(formatter.format(response.data.result))}`)
    })
    .catch(function (error) {
        console.log(error)
    })
    
})

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);

httpServer.listen(port, () => {
        console.log('HTTP Server running on port 80');
});

httpsServer.listen(sslport, () => {
        console.log('HTTPS Server running on port 443');
});