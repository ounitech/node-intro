function repeat(operation, num){
    for (let i = 0; i < num; i++) {
        operation()
    }
}

// node school solution
function callTimes(operation, num){
    if(num > 0){
        callTimes(operation, --num);
    }
}

module.exports = repeat