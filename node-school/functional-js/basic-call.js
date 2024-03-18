function duckCount(...maybeDucks){
    let count = 0
    for (let maybeDuck of maybeDucks) {
        if( Object.prototype.hasOwnProperty.call(maybeDuck, 'quack') ){
            count = count+1
        }
    }
    return count
}

// node school solution
function official(){
    return Array.prototype.slice.call(arguments)
        .filter(arg => Object.prototype.hasOwnProperty.call(arg, 'quack'))
        .length
}

module.exports = duckCount