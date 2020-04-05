const transVal = {
    $null: { $type: 10 },
    $exists: { $exists: true, $ne: null },
    $isntEmptyArray: { $exists: true, $ne: [] },
}

const transKey = {
    "listerId": 'listing.listerId',
    "updatedAt": 'listing.updatedAt',
    "price": 'level1.price',
    "mitigatingCompany": 'listing.mitigatingCompany',
    "pictureKeys": 'listing.pictureKeys'
}


module.exports = (userFilters) => {
    let finalFilters = {};
    Object.entries(userFilters)
        .forEach(([path, filters]) => {
            const key = transKey[path];
            const value = Object
                .fromEntries(filters
                    .map(filt => Object.entries(typeof filt === "string"
                        ? transVal[filt]
                        : filt))
                    .flat());
            if (Object.keys(value).length !== 0) {
                finalFilters[key] = value;
            }
        })
    return finalFilters;
}