const translationSwitch = {
    asc: -1,
    desc: 1
}

module.exports = (userSort) => {
    let sort = { [Object.keys(userSort)[0]]: translationSwitch[(Object.values(userSort)[0])] };
    return sort;
}