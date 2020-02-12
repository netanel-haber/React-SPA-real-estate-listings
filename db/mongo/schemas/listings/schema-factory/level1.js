const { Schema } = require('mongoose');

const addressSchema = new Schema({
    municipality: String,
    areaId: Number,
    street: String,
    number: Number,
    apt: Number,
});
const level1SchemaFactory = (merge, types, isResidential = true) => {
    let schema = {
        address: addressSchema,
        floor: Number,
        floorsInBuilding: Number,
        sqMeters: Number,
        price: Number,
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
