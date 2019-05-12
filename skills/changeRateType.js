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

      attachment.reply_markup = (typeof attachment.reply_markup === 'object')
        ? attachment.reply_markup
        : JSON.parse(attachment.reply_markup);

      const buttons = attachment.reply_markup.inline_keyboard[0];

      buttons[0].callback_data = `show_rate 5 ${currency}`;
      buttons[1].callback_data = `show_rate 11 ${currency}`;

      bot.sendMessage(chatId, text, attachment);
    }
  });
};
