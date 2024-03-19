'use strict'
const http = require('http')
const results = []
let count = 0

function printResults () {
    for (const result of results) {
        console.log(result.res)
    }
}

function httpGet (url, index) {
    http.get(url, function (response) {

        let obj = {link: url, res: ''}
        results[index] = obj

        response.setEncoding('utf-8')
        response.on('err', console.error)
        response.on('data', data => {obj.res += data})
        response.on('end', function (data){
            count++;
            if(count === 3){
                printResults()
            }
        })
    })
}

for (let i = 0; i < 3; i++) {
    httpGet(process.argv[2 + i], i)
}
