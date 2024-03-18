const fs = require('node:fs')

let data = fs.readFileSync(process.argv[2], 'utf-8')
numberOfLines = data.split('\n').length -1

console.log(numberOfLines)