const net = require('net');
const port = 3000;

function createServer() {
    return new Promise((resolve, reject) => {
        try {
            let server = net.createServer();

            server.listen(port, console.log('Server listening on port ' + port))
            resolve(server)
        } catch (err) {
            reject(err)
        }
    })
}

(async () => {
    try {
        let serverConnection = await createServer();

        serverConnection.on('connection', (client) => {
            console.log('A client connected');

            client.on('end', console.log('A client disconnected'))
        })
    } catch (err) {
        throw err
    }
})