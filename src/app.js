const routes = require ('./routes');

const express = require('express');
const app = express();
app.use(express.json());
routes.init(app)

module.exports = app;