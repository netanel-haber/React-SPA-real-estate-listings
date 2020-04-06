const transKey = {
    "price": 'level1.price',
    "type":"level1.type",

    "listerId": 'listing.listerId',
    "updatedAt": 'listing.updatedAt',
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