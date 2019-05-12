/* eslint-disable global-require */
/* eslint-disable no-bitwise */
const templates = require('../templates.json');

module.exports = (bot) => {
  bot.on('callback_query', async (msg) => {
    const chatId = msg.message.chat.id;
    if (~msg.data.indexOf('show_rate')) {
      const rateId = msg.data.split(' ')[1];
      const currency = msg.data.split(' ')[2];
      const rate = await require('../modules/getRate')(currency, rateId);
      const { attachment } = templates.showRate;

      attachment.reply_markup = (typeof attachment.reply_markup === 'object')
        ? attachment.reply_markup
        : JSON.parse(attachment.reply_markup);

      let { text } = templates.showRate;

      text = text.replace(/{{inbound}}/g, rate.ccy).replace(/{{outbound}}/g, rate.base_ccy)
        .replace('{{buyRate}}', rate.buy).replace('{{saleRate}}', rate.sale);

      const buttons = attachment.reply_markup.inline_keyboard[0];
      buttons[0].callback_data = `change_rate_type ${currency}`;

      bot.sendMessage(chatId, text, attachment);
    }
  });
};
