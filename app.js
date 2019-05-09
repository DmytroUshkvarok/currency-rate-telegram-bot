/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');

const url = process.env.URL;
const token = process.env.TOKEN;
const bot = new TelegramBot(token);

bot.setWebHook(`${url}/telegram-bot`);

module.exports = (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
};

fs.readdirSync('./skills').forEach((file) => {
  if (file.match(/\.js$/) !== null) {
    require(`./skills/${file}`)(bot);
  }
});
