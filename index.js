const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ Cliente pronto!');
});

client.on('message', msg => {
  if (!msg.from.includes('-') && msg.body.toLowerCase().includes('hi')) {
    msg.reply('Oi! Eu sou um bot funcionando com whatsapp-web.js ✅');
  }
});

client.initialize();
