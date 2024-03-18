function getShortMessages(messages){
    return messages
        .map(item => item.message)
        .filter(item => item.length < 50)
}

module.exports = getShortMessages