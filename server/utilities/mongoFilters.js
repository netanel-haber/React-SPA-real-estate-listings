const ObjectId = require('mongoose').Types.ObjectId;

const booleanAttributes = {
    general: ["AC", "grates", "elevator", "handicappedAccesible", "mamad", "storage", "furniture"],
    rent: ["taxesIncluded", "longTerm", "forPartners", "petsAllowed"],
    commercial: ["divided", "meetingRoom", "bathrooms", "cameras", "ITRoom", "highCeiling", "loadingRamp", "underground", "kitchenette", "alarm"],
    roommates: ["taxesIncluded", "keepsKashrut", "petsAllowed"],
    forsale: []
}

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

    "entryDate": 'level2.entryDate',


    ...Object.fromEntries(booleanAttributes.general.map(attr => [attr, `level3.${attr}`])),
    ...Object.fromEntries(booleanAttributes.commercial.map((attr, index) => [attr, `level${index > 3 ? 3 : 2}.${attr}`])),
    ...Object.fromEntries(booleanAttributes.rent.map(attr => [attr, `level3.${attr}`])),
    ...Object.fromEntries(booleanAttributes.roommates.map(attr => [attr, `level3.${attr}`])),

    "taxesIncluded": 'level2.taxesIncluded',
}




const transVal = {
    "listerId": ({ $eq }) => ({ $eq: ObjectId($eq) })
}


module.exports = (userFilters) => {
    let finalFilters = {};
    Object.entries(userFilters)
        .filter(([, v]) => Boolean(Object.keys(v || {}).length))
        .forEach(([path, filters]) => {
            if (transKey[path]) {
                const key = transKey[path];
                const value = transVal[path] ? transVal[path](filters) : filters;
                finalFilters[key] = value;
            }
        })
    return finalFilters;
}