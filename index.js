/*
const helmet = require('helmet')
app.use(helmet())
app.use(helmet.noCache())

*/


const express = require('express');
const http = require('http')
const path = require('path');
const helmet = require('helmet')

const app = express();
const port = process.env.PORT || 3010

app.use(helmet())
app.use(helmet.noCache())

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.createServer(app).listen(port, function () {
    console.log('Server listening on port ' + port);
})