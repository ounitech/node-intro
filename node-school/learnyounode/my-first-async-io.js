const fs = require('node:fs')

fs.readFile(process.argv[2], 'utf-8', countLines)

function countLines(err, data){
    if(err){
        console.log('error ', err)
    }
    let numberOfLines = data.split('\n').length -1
    console.log(numberOfLines)
}

