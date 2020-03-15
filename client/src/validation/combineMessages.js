const combineMessages = (validationArr, messages, prefix) => {
    const result = `${prefix}${validationArr.map(inval => messages[inval]).join(", ")}`
    if (result === prefix)
        return true;
    else
        return result;
}




module.exports = combineMessages;