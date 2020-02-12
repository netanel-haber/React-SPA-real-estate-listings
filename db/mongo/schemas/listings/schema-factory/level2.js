const { Schema } = require('mongoose');
const { upkeep } = require('../validation');

const level2SchemaFactory = (merge = {}, isResidential = true) => {
    let schema = {
        entrance: String,
        desc: String,
        entryDate: Date,
        parkingSpots: Number,
        ...merge
    };
    if (isResidential)
        schema.upkeep = {
            type: String,
            enum: upkeep
        }
    return new Schema(schema);
};


module.exports = level2SchemaFactory;