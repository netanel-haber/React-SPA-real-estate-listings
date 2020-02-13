const modelOf = require('./switch-model');

const topLevel = '_id listing level1';
const bottomLevel = 'level2 level3';

module.exports = {
    async getTopLevel(type) {
        let Model = modelOf(type);
        return await Model.find({}, topLevel, { sort: { date: 1 } })
    },
    async getBottomLevel(type, id) {
        let Model = modelOf(type);
        return await Model.findById(id, bottomLevel, { sort: { date: 1 } })
    }
}