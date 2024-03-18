function logger(level, ...optionalParams){
    console.log(level, ...optionalParams)
}

function info(...optionalParams){
    logger('INFO:', ...optionalParams)
}

module.exports = logger