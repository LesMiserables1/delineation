const WebSocket = require('ws');

const ws = new WebSocket("wss://ws-pjpb.herokuapp.com/");
ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function incoming(data) {
  console.log(`received: ${data}`);
});