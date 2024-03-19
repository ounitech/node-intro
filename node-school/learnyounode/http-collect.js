const http = require('node:http')

http.get(process.argv[2], function callback(response){
    response.setEncoding('utf-8')
    response.on('error', console.log)

    let alldata = ''
    response.on('data', function onData(chunk){
        alldata += chunk
    })

    response.on('end', () => {
        console.log(alldata.length)
        console.log(alldata)
    })

}).on('error', console.error)