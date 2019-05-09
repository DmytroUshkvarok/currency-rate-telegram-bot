/* eslint-disable no-bitwise */
const templates = require('../templates.json');

module.exports = (bot) => {
  bot.on('callback_query', (msg) => {
    const chatId = msg.message.chat.id;
    if (~msg.data.indexOf('change_rate_type')) {
      const currency = msg.data.split(' ')[1];
      const { attachment } = templates.changeRateType;
      let { text } = templates.changeRateType;
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
