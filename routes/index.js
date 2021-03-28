const express = require('express');

const app = express();

app.use(require('./autor'))
app.use(require('./libro'))
app.use(require('./libro_carrito'))

module.exports = app;