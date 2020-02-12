const { Schema } = require('mongoose');

const listingMetadataSchema = require('./listingMeta');
const level1SchemaFactory = require('./level1');
const level2SchemaFactory = require('./level2');
const level3SchemaFactory = require('./level3');


const schemaFactory = (mergeLevel1, mergeLevel2, mergeLevel3) => {
    return new Schema({
        listing: listingMetadataSchema,
        level1: level1SchemaFactory(...mergeLevel1),
        level2: level2SchemaFactory(...mergeLevel2),
        level3: level3SchemaFactory(...mergeLevel3)
    })
};



module.exports = schemaFactory;
