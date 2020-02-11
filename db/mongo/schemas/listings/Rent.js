const Schema = require('mongoose').Schema;
const { rent } = require('./validation').level1types;

const {
    listingMetadata,
    level1SchemaFactory,
    level2SchemaFactory,
    level3SchemaFactory
} = require('./abstract_schema_building_blocks');

module.exports = new Schema({
    ...listingMetadata,
    level1: level1SchemaFactory({}, rent),
    level2: level2SchemaFactory({ homeOwnerAssociationMonthly: Number, numChecks: Number, taxesIncluded: Boolean }),
    level3: level3SchemaFactory({ longTerm: Boolean, forPartenrs: Boolean, petsAllowed: Boolean })
});