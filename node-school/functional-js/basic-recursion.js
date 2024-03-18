
function recursiveReduce(arr, fn, initial){
    if(arr.length <= 0) return initial;
    newInit = fn(arr[0], initial)
    newArr = arr.slice(1)
    return recursiveReduce(newArr, subFunc, newInit)
}
function fn(currentValue, accumulator){
    let val = accumulator[currentValue]
    if(!val){
        accumulator[currentValue] = 1
    }else{
        accumulator[currentValue] = val + 1
    }
    return accumulator
}

module.exports = recursiveReduce