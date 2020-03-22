const transVal = {
    $null: null,
    $exists: { $exists: true, $ne: null },
    $isntEmptyArray: { $exists: true, $ne: [] }
}

const transKey = {
    "listerId": 'listing.listerId',
    "updatedAt": 'listing.updatedAt',
    "price": 'level1.price',
    "mitigatingCompany": 'listing.mitigatingCompany',
    "pictureKeys": 'listing.pictureKeys'
}


module.exports = (userFilters) => {
    let filters = {};
    Object.entries(userFilters).forEach(([path, filter]) => {
        const key = transKey[path];
        const value = transVal[filter] !== undefined ? transVal[filter] : filter;
        filters[key] = value;
    })
    return filters;
}