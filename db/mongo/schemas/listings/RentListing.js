const { rent } = require('./validation').level1types;
const schemaFactory = require('./schema-factory/schemaFactory');

module.exports = schemaFactory(
    [{}, rent],
    [{ homeOwnerAssociationMonthly: Number, numChecks: Number, taxesIncluded: Boolean }],
    [{ longTerm: Boolean, forPartenrs: Boolean, petsAllowed: Boolean }]
);
