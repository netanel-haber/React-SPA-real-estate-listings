const combineValidation = (val, validators, messages, prefix) => {
    const result = `${prefix} ${validators.map((check, index) =>
        ((check instanceof RegExp && !check.test(val)) || (typeof check === "function" && !check(val)))
        && messages[index]).filter(msg => msg).join(". ")}`
    if (result === prefix)
        return null;
    else
        return result;
}


export default combineValidation;