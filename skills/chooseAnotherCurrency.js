const templates = require('../templates.json');

module.exports = (bot) => {
  bot.on('callback_query', (msg) => {
    const chatId = msg.message.chat.id;
    if (msg.data === 'change_currency') {
      bot.sendMessage(chatId, templates.chooseAnother.text, templates.chooseAnother.attachment);
    }
  });
};
