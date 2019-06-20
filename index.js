const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('886860863:AAHal1EeuIuDrdy6k6Pl7SRyj3DWkwibDBQ');

//bot.on('message', msg => {
//  const { chat : { id } } = msg;
//    bot.sendMessage(id, 'Hello');
//});

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
          
            bot.sendMessage(id, 'Hello');
         
            bot.processUpdate(JSON.parse(body));
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(body);            
        }
      else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('OK');
      }
    });
};

