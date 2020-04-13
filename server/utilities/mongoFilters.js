const ObjectId = require('mongoose').Types.ObjectId;

const transKey = {
    "listerId": 'listing.listerId',
    "updatedAt": 'listing.updatedAt',
    "mitigatingCompany": 'listing.mitigatingCompany',
    "pictureKeys": 'listing.pictureKeys',

    "price": 'level1.price',
    "type": "level1.type",
    "municipality": 'level1.address.municipality',
    "street": 'level1.address.street',
    "area": 'level1.address.area',
    "rooms": 'level1.rooms',
    "roommates": 'level1.roommates',
    "sqMeters": 'level1.sqMeters',

    "entryDate": 'level2.entryDate'
}

const transVal = {
    "listerId": ({ $eq }) => ({ $eq: ObjectId($eq) })
}


module.exports = (userFilters) => {
    let finalFilters = {};
    Object.entries(userFilters)
        .filter(([, v]) => Boolean(Object.keys(v || {}).length))
        .forEach(([path, filters]) => {
            const key = transKey[path];
            const value = transVal[path] ? transVal[path](filters) : filters;
            finalFilters[key] = value;
        })
    return finalFilters;
}