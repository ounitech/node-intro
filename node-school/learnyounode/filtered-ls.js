const fs = require('node:fs')
const path = require('node:path')

let dirPath = process.argv[2]
let ext = '.'+process.argv[3]

fs.readdir(dirPath, filterExtension)

function filterExtension(err, files){
    if(err){
        console.log('error' , err)
    }
    let filtered =  files.filter(fileName => path.extname(fileName) === ext)
    for (const filteredElement of filtered) {
        console.log(filteredElement)
    }
}