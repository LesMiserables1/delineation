const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });


wss.on('connection', function connection(ws) {
  ws.on('join', function incoming(message) {
    // ws.send(message)
    console.log('received: HALOO');
  });
  ws.on('message', function incoming(message) {
    ws.send(message)
    console.log('received: %s', message);
  });
  // var stdin = process.openStdin();
  // stdin.addListener("data", function(d) {
  //     ws.send(d.toString().trim())
  // });
});

