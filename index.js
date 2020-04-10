
const TeleBot = require('telebot');
const bot = new TeleBot('951062963:AAEhjPJWd-CtepUwcZ8yD5LWlYDxQ8CMMCM');

bot.on('message', (msg) => {
var cu = "cu";
var merda = "merda";
var bye = ["adeus","bye","xau","até logo","vou embora"];
var Hi = ["ola","bom dia","boa tarde"];
var tudobem = ["então tudo bem?","tá tudo?","tudo bem?"];

if (msg.text.toString().toLowerCase().indexOf(cu) === 0) {
    bot.sendMessage(msg.from.id, "Mete mas é o dedo no teu cu, oh " + msg.from.first_name);
}
if (msg.text.toString().toLowerCase().indexOf(merda) === 0) {
    bot.sendMessage(msg.from.id, "Vai tu à merda " + msg.from.first_name);
}
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.from.id, "Olá " + msg.from.first_name);
}
if (msg.text.toString().toLowerCase().includes(bye)) {
bot.sendMessage(msg.chat.id, "Ponha-se no caralho Sr " + msg.from.first_name);
}
if (msg.text.toString().toLowerCase().indexOf(tudobem) === 0) {
    bot.sendMessage(msg.from.id, "Tá tudo na merda mas vamos andando");
}
});
bot.start();
