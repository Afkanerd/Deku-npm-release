const net = require('net');
const port = 3000

var client = net.connect({
    port: port
}, () => {
    console.log('Connected to server');
})

client.on('end', () => {
    console.log('Disconnected from Server');
})