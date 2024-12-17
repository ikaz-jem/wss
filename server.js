// import WebSocket from 'ws';
// import { SocksProxyAgent } from 'socks-proxy-agent';




//   // If you're using SOCKS5, ensure that the URL starts with 'socks5://'
//   const agent = new SocksProxyAgent('socks://brd-customer-hl_67471c45-zone-scraping_browser4:r0wqk4z49t4l@brd.superproxy.io:9222');  // Create a SOCKS Proxy Agent for WebSocket
//   // Create a WebSocket client that connects through the dynamic proxy
//   const ws = new WebSocket('wss://pumpportal.fun/api/data', {agent});

//   // Event handler when WebSocket connection is opened
//   ws.on('open', () => {
//     console.log('Connected to WebSocket server through proxy');
//     let payload = {
//       method: "subscribeNewToken", 
//     }
//   ws.send(JSON.stringify(payload));
//   });

//   // Event handler when a message is received from the WebSocket server
//   ws.on('message', (message) => {
//     console.log('Received message from WebSocket server:', message);
//   });

//   // Event handler for WebSocket errors
//   ws.on('error', (error) => {
//     console.error('WebSocket error:', error);
//   });

//   // Event handler when the WebSocket connection is closed
//   ws.on('close', () => {
//     console.log('WebSocket connection closed');
//   });


// // Trigger the WebSocket call
// Import the 'ws' library

const WebSocket = require('ws')

// Create a WebSocket server that listens on port 8765
const wss = new WebSocket.Server({ port: 8080 });

console.log("WebSocket server is running on ws://localhost:8765");

// Event listener for when a client connects to the server
wss.on('connection', (ws) => {
  console.log("A new client connected!");

  // Event listener for receiving messages from the client
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);

            const data =  JSON.parse(message)
                const {method} = data
if (method === 'subscribe'){
    ws.send('user subscribed succesfully')
}

    // Send the same message back to the client
    ws.send(`Server echoes: ${message}`);
  });


  ws.on('subscribe', ()=>{
    ws.send()
  } )

  // Send a welcome message when the client connects
  ws.send("Welcome to the WebSocket server!");
});
