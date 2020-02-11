const Schema = require('mongoose').Schema;
const { commercial } = require('./validation').level1types;

const {
    listingMetadata,
    level1SchemaFactory,
    level2SchemaFactory,
    level3SchemaFactory
} = require('./abstract_schema_building_blocks');

module.exports = new Schema({
    ...listingMetadata,
    level1: level1SchemaFactory({}, commercial, false),
    level2: level2SchemaFactory({
        divided: Boolean,
        rentedUntil: Date,
        meetingRoom: Boolean,
        bathrooms: Boolean
    }, false),
    level3: level3SchemaFactory({
        cameras: Boolean,
        ITRoom: Boolean,
        highCeiling: Boolean,
        loadingRamp: Boolean,
        underGround: Boolean,
        kitchenette: Boolean,
        alarm: Boolean,
    })
});