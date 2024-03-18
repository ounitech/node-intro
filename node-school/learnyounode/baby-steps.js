'use strict'

let rs = process.argv.slice(2)
    .reduce((acc, cur) => acc + Number(cur), 0)

console.log(rs)
