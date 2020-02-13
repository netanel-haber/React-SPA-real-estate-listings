const modelOf = require('./switch-model');

module.exports = {
    async getItems(path) {
        let Model = modelOf(path);
        return await Model.find({}, null, { sort: { date: 1 } })
    }
}