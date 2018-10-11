const express = require('express');
const getAvailableServer = require('./MyIps.js');
const request = require('request');
const parser = require('body-parser');
const server = express();

const port = process.env.PORT || 3000;

const redirectToServer = (req, res) => {
    let {originalUrl} = req;
    let availableServer = getAvailableServer() + originalUrl;
    req.pipe(request({url:availableServer})).pipe(res);
}

server.use(parser.json());
server.get('/*', redirectToServer);

server.listen(port, () => {
    console.log(`Listening on ${port}...`);
});