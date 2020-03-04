const { Schema } = require('mongoose');

const addressSchema = require('../../addressSchema');
const level1SchemaFactory = (merge, types, isResidential = true) => {
    let schema = {
        address: addressSchema,
        floor: Number,
        floorsInBuilding: Number,
        sqMeters: Number,
        price: {
            type: Number,
            default: null
        },
        type: {
            type: String,
            enum: types
        },
        ...merge
    }
    if (isResidential) schema.rooms = Number;
    return new Schema(schema);
};

module.exports = level1SchemaFactory;
