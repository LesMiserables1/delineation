const {Server} = require('ws');
const WebSocket = require('ws')
const express = require('express')

const PORT = process.env.PORT||3001
const server = express()
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

wss.on('connection', function connection(ws) {
  console.log('client connected')
  ws.on('message', function incoming(message) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});