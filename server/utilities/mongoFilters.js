const transVal = {
    $null: null,
    $exists: { $exists: true, $ne: null },
    $isntEmptyArray: { $exists: true, $ne: [] }
}

const transKey = {
    "updatedAt": 'listing.updatedAt',
    "price": 'level1.price',
    "mitigatingCompany": 'listing.mitigatingCompany',
    "pictureKeys": 'listing.pictureKeys'
}


module.exports = (userFilters) => {
    let filters = {};
    Object.entries(userFilters).forEach(([path, filter]) => {
        filters[transKey[path]] = transVal[filter]
    })
    return filters;
}