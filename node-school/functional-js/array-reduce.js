function countWords(inputWord){
   return inputWord.reduce(function (accumulator, currentValue){
       let val = accumulator[currentValue]
       if(!val){
           accumulator[currentValue] = 1
       }else{
           accumulator[currentValue] = val + 1
       }
       return accumulator
    }, {})

}

// node school solution
function countWordsSolution(arr){
    return arr.reduce(function (countMap, word){
        countMap[word] = ++countMap[word] || 1
        return countMap
    }, {})
}

module.exports = countWords