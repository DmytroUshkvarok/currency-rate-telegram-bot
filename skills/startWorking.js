const templates = require('../templates.json');

module.exports = (bot) => {
  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text === 'Начать работу') {
      bot.sendMessage(chatId, templates.startWorking.text, templates.startWorking.attachment);
    }
  });
};
