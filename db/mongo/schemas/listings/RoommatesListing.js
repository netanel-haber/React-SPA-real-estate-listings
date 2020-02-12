const { roommates } = require('./validation').level1types;

const schemaFactory = require('./schema-factory/schemaFactory');

module.exports = schemaFactory(
    [{ roommates: Number }, roommates],
    [{ numChecks: Number, taxesIncluded: Boolean }],
    [{ keepsKashrut: Boolean, petsAllowed: Boolean }]
);