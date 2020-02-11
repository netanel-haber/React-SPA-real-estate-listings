const Schema = require('mongoose').Schema;
const { upkeep } = require('./validation');

const listingMetadata = {
    mitigator: Boolean,
    listerId: {
        type: Schema.Types.ObjectId,
        ref: '',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: Date,
    pictureKeys: [String]
};



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
        rooms: Number,
        type: {
            type: String,
            enum: types
        },
        ...merge
    }
    if (isResidential) schema.rooms = Number;
    return new Schema(schema);
}



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


const level3SchemaFactory = (merge = {}) => new Schema({
    AC: Boolean,
    grates: Boolean,
    elevator: Boolean,
    handicappedAccessible: Boolean,
    mamad: Boolean,
    storage: Boolean,
    furnitureDesc: String,
    ...merge
})


module.exports = {
    listingMetadata,
    level1SchemaFactory,
    level2SchemaFactory,
    level3SchemaFactory
};