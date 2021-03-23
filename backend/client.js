const io = require('socket.io-client')("ws://localhost:8080");
io.on("connect", () => {
  // // either with send()
  io.send("Hello!")
  io.on('message',(msg)=>{
    console.log(msg)
  })
  // // or with emit() and custom event names
  // socket.emit("salutations", "Hello!", { "mr": "john" }, Uint8Array.from([1, 2, 3, 4]));
});

