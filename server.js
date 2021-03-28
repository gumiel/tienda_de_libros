const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config()

const { PORT, development} = require('./config/config');

const app = express();

app.use(bodyParser.json());

app.use(require('./routes'));

app.listen(PORT, () => {
    console.log(`Listen PORT: ${PORT}`)
    console.log(`Listen development: ${development.database}`)
});

module.exports = app;