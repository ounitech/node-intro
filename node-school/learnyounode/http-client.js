const http = require('node:http');

http.get(process.argv[2], function callback(response){
    response.setEncoding('utf-8')
    response.on('data', console.log)
    response.on('error', console.log)
}).on('error', console.error)