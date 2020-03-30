const { Schema } = require('mongoose');
const { upkeep } = require('../validation');

const level2SchemaFactory = (merge = {}, isResidential = true) => (new Schema({
    entrance: String,
    desc: String,
    entryDate: Date,
    parkingSpots: Number,
    upkeep: {
        type: String,
        enum: upkeep
    },
    numBalconies: {
        type: Number,
        min: 0,
        max: 3
    },
    ...merge
}));

module.exports = level2SchemaFactory;