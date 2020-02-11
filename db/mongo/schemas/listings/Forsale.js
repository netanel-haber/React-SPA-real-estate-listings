const Schema = require('mongoose').Schema;
const { forsale } = require('./validation').level1types;

const {
    listingMetadata,
    level1SchemaFactory,
    level2SchemaFactory,
    level3SchemaFactory
} = require('./abstract_schema_building_blocks');

module.exports = new Schema({
    ...listingMetadata,
    level1: level1SchemaFactory({}, forsale),
    level2: level2SchemaFactory({ sqMGarden: Number, sqMbuilt: Number, numBalconies: Number }),
    level3: level3SchemaFactory()
});