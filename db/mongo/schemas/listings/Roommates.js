const Schema = require('mongoose').Schema;
const { roommates } = require('./validation').level1types;

const {
    listingMetadata,
    level1SchemaFactory,
    level2SchemaFactory,
    level3SchemaFactory
} = require('./abstract_schema_building_blocks');

module.exports = new Schema({
    ...listingMetadata,
    level1: level1SchemaFactory({ roommates: Number }, roommates),
    level2: level2SchemaFactory({ numChecks: Number, taxesIncluded: Boolean }),
    level3: level3SchemaFactory({ keepsKashrut: Boolean, petsAllowed: Boolean })
});