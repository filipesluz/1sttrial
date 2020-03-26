
const TeleBot = require('telebot');
const bot = new TeleBot('951062963:AAEhjPJWd-CtepUwcZ8yD5LWlYDxQ8CMMCM');

bot.on('text', (msg) => msg.reply.text(msg.text.replace("banana","laranja")));
bot.on('text', (msg) => msg.reply.text(msg.text));

bot.start();
