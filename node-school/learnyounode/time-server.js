const net = require('node:net');
const moment = require('moment')

const port = process.argv[2];

const server = net.createServer(function (socket){
    return socket.end(now() + '\n')
})

const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
};

const dateFormartter = new Intl.DateTimeFormat('en-FR', options)


function now() {
    return  moment().format('YYYY-MM-DD HH:mm')
}

server.listen(port)
