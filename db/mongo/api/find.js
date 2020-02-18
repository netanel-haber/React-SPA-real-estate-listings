const modelOf = require('./switch-model');

const topLevel = '_id listing level1';
const bottomLevel = 'level2 level3';

module.exports = {
    async getTopLevel(type, filters = {}) {
        let Model = modelOf(type);
        return await Model.find(filters, topLevel, { sort: { date: 1 }, limit: 10 })
    },
    async getBottomLevel(type, id) {
        let Model = modelOf(type);
        return await Model.findById(id, bottomLevel, { sort: { date: 1 } })
    },
    async countDocs(type) {
        let Model = modelOf(type);
        return await Model.countDocuments();
    }
}