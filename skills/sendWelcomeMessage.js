const templates = require('../templates.json');

module.exports = (bot) => {
  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text === '/start') {
      bot.sendMessage(chatId, templates.welcome.text, templates.welcome.attachment);
    }
  });
};
