/* eslint-disable global-require */
/* eslint-disable no-bitwise */
const templates = require('../templates.json');

module.exports = (bot) => {
  bot.on('callback_query', (msg) => {
    const chatId = msg.message.chat.id;
    if (~msg.data.indexOf('check')) {
      const currency = msg.data.split(' ')[1];
      const { attachment } = templates.askForCurrencyType;
      let { text } = templates.askForCurrencyType;
      text = text.replace(/{{currency}}/g, currency);
      const buttons = attachment.reply_markup.inline_keyboard[0];
      buttons.forEach((element) => {
        const button = element;
        button.callback_data += currency;
      });
      bot.sendMessage(chatId, text, attachment);
    }
  });
};
