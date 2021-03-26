// const httpServer = require("http").createServer();
// const io = require("socket.io")(httpServer, {
  
// });

// io.on("connection", (socket) => {
//   socket.on('join', ({title}, callback) => {
//     console.log(title)
//   })
//   console.log('a user connected')
//   socket.on('message',(msg)=>{
//     socket.send('test')
//     console.log(msg)
//   })
// });



// httpServer.listen(8080);
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });


wss.on('connection', function connection(ws) {
  ws.send('test')
  ws.on('message', function incoming(message) {
    ws.send(message)
    console.log('received: %s', message);
  });
  // var stdin = process.openStdin();
  // stdin.addListener("data", function(d) {
  //     ws.send(d.toString().trim())
  // });
});