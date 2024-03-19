const fs = require('node:fs')
const path = require('node:path')

function filterFilesByExtension(dir, extension, callback){
    function filter() {
        return function (err, data) {
            if (err) {
                return callback(err)
            }

            let filtered = data.filter(function (filename) {
                return  path.extname(filename) === '.' + extension
            })

            callback(null, filtered)
        };
    }

    return fs.readdir(dir, 'utf-8', filter())
}


module.exports = filterFilesByExtension