const modelOf = require('./switch-model');
const { Lister } = require('../index');


const getTopLevel = async (type, filters = {}, sorts = {}, skip, limit) =>
    await modelOf(type).find(filters, '_id listing level1', { sort: sorts, skip, limit })

const getBottomLevel = async (type, id) =>
    await modelOf(type).findById(id, 'level2 level3');

const countDocs = async (type, filters = {}) =>
    await modelOf(type).countDocuments(filters);


const getLister = async (id) =>
    await Lister.findById(id);


module.exports = {
    getBottomLevel,
    getTopLevel,
    countDocs,
    getLister
}