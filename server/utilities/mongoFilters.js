const translationSwitch = {
    attributeIsNull: null,
    attributeIsntNull: { $exists: true, $ne: null }
}

module.exports = (userFilters) => {
    let filters = {};
    Object.entries(userFilters).forEach(([filter, path]) => {
        if (translationSwitch.hasOwnProperty(filter)) {
            filters[path] = translationSwitch[filter];
        }
        else {
            throw new Error("cannot discern filter. crashing.")
        }
    })
    return filters;
}