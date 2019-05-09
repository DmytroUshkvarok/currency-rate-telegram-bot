require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT;
const main = require('./app.js');

const app = express();

// bot.setWebHook(`${url}/bot${token}`);
app.use(bodyParser.json());

app.post(`/telegram-bot`, (req, res) => {
    console.log(req.body);
    main(req, res);
});

app.listen(port, () => {
console.log(`Express server is listening on ${port}`);
});
