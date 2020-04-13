const transKey = {
    "price": 'level1.price',
    "type": "level1.type",
    "municipality": 'level1.address.municipality',
    "street": 'level1.address.street',
    "area": 'level1.address.area',
    "rooms": 'level1.rooms',
    "roommates":'level1.roommates',

    "listerId": 'listing.listerId',
    "updatedAt": 'listing.updatedAt',
    "mitigatingCompany": 'listing.mitigatingCompany',
    "pictureKeys": 'listing.pictureKeys',
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