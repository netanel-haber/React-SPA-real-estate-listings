const { modelOf, types } = require('./switch-model');


const getTopLevel = async (type, filters = {}, sorts = {}, skip, limit) =>
    await modelOf(type).find(filters, '_id listing level1', { sort: sorts, skip, limit })

const getBottomLevel = async (type, id) =>
    await modelOf(type).findById(id, 'level2 level3');

const countDocs = async (type, filters = {}) =>
    await modelOf(type).countDocuments(filters);

const getAllListingsForLister = async (id) => {
    const results = await Promise.all(
        types.map(type => modelOf(type).find({ 'listing.listerId': id })))
    return Object.fromEntries(results.map((arr, index) => [types[index], arr]));
}




module.exports = { getBottomLevel, getTopLevel, countDocs, getAllListingsForLister }

