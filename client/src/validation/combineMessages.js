const combineMessages = (validationArr, messages, prefix) => {
    const result = `${prefix}${validationArr.map(inval => messages[inval]).join(", ")}`
    return (result === prefix) || result;
}


module.exports = combineMessages;