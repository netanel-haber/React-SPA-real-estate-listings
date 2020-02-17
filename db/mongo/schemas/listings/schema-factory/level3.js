const { Schema } = require('mongoose');

const level3SchemaFactory = (merge = {}) => new Schema({
    AC: Boolean,
    grates: Boolean,
    elevator: Boolean,
    handicappedAccessible: Boolean,
    mamad: Boolean,
    storage: Boolean,
    furniture: Boolean,
    furnitureDesc: String,
    ...merge
})

module.exports = level3SchemaFactory;

