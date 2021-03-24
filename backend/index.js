const WebSocket = require('ws');

const PORT = process.env.PORT||3000
const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    ws.send(message)
  });
});