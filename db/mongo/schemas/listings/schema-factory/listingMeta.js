const { Schema } = require('mongoose');
const { nadlan } = require('../../../connection');
const mitigatingCompany = require('../../users/MitigatingCompany');
const contact = require('../../contact');

const listingMetadataSchema = new Schema({
    mitigatingCompany:{
        type: mitigatingCompany,
        default: null
    },
    listerId: {
        type: Schema.Types.ObjectId,
        validate: [(val) => nadlan.models.Lister.findById(val),
            'lister id does not seem to exist'],
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
});


module.exports = listingMetadataSchema;