const routes = require('./routes');

const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors')
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));

routes.init(app)

module.exports = app;