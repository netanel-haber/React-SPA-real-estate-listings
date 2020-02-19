const modelOf = require('./switch-model');
const { ForsaleListing, RentListing, CommercialListing, RoommatesListing, Lister, MitigatingCompany } = require('../index');

const topLevel = '_id listing level1';
async function getTopLevel(type, filters = {}) {
    let Model = modelOf(type);
    return await Model.find(filters, topLevel, { sort: { date: 1 }, limit: 10 })
}

const bottomLevel = 'level2 level3';
async function getBottomLevel(type, id) {
    let Model = modelOf(type);
    return await Model.findById(id, bottomLevel, { sort: { date: 1 } })
}


async function countDocs(type) {
    let Model = modelOf(type);
    return await Model.countDocuments();
}

async function getLister(id) {
    return await Lister.findById(id);
}



module.exports = {
    getBottomLevel,
    getTopLevel,
    countDocs,
    getLister
}