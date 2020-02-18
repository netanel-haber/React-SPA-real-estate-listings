const { forsale } = require('./validation').level1types;
const schemaFactory = require('./schema-factory/schemaFactory');

module.exports = schemaFactory(
    [{}, forsale],
    [{ sqMGarden: Number, sqMBuilt: Number, numBalconies: Number }],
    [{}]
);

