const modelOf = require('./switch-model');
const { Lister } = require('../index');


const getTopLevel = async (type, filts = {}, opts = {}) =>
    await modelOf(type).find(filts, '_id listing level1', opts);

const getBottomLevel = async (type, id) => await modelOf(type).findById(id, 'level2 level3');

const countDocs = async (type) => await modelOf(type).countDocuments();

const getLister = async (id) => await Lister.findById(id);



module.exports = {
    getBottomLevel,
    getTopLevel,
    countDocs,
    getLister
}