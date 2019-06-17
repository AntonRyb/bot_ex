/*const TelegramBot = require('node-telegram-bot-api');
const request = require('request');


const token = '608783806:AAEIm9YHSELLgbNGz8Q6Ib4cmmwS48ly4Tk';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


let button = {
  reply_markup: {
    inline_keyboard:
    [
      [
      {text: 'EUR ~ €', callback_data: 'EUR'},
      {text: 'USD ~ $', callback_data: 'USD'},
      
      {text: 'BTC ~ ฿', callback_data: 'BTC'}
      ]
    ]
  }
}

bot.onText(/\/curse/, (msg, match) => {  

  const chatId = msg.chat.id;   

  bot.sendMessage(chatId, 'Выберете валюту', button);
});

bot.on('callback_query', query => {
  const id = query.message.chat.id;

  request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3', function (error, response, body){
     const data = JSON.parse(body);
     const result = data.filter(item => item.ccy === query.data)[0];

     let answer = `${result.ccy} => ${result.base_ccy}\nBuy: ${result.buy}\nSale: ${result.sale}`;
     bot.sendMessage(id, answer);
  })
})


module.exports = (req, res) => {
  res.end('The time is: ' + new Date())
}
*/

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('886860863:AAHal1EeuIuDrdy6k6Pl7SRyj3DWkwibDBQ');

bot.on('message', msg => {
  const { chat : { id } } = msg;
    bot.sendMessage(id, 'Hello');
});

bot.onText(/\/help (.+)/, (msg, [source, match]) => {
  const { chat : { id } } = msg;  
    bot.sendMessage(id, match);
})



module.exports = (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        if (body) {
            bot.processUpdate(JSON.parse(body));
        }
        res.end('OK');
    });
};
