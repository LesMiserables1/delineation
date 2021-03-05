const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');
ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function incoming(data) {
  console.log(`received: ${data}`);
});

var stdin = process.openStdin();
stdin.addListener("data", function(d) {
  ws.send(d.toString().trim())
});