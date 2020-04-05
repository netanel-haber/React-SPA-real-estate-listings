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
        .filter(([, v]) => Boolean(Object.keys(v || {}).length))
        .forEach(([path, filters]) => {
            const key = transKey[path];
            finalFilters[key] = filters;
        })
    return finalFilters;
}