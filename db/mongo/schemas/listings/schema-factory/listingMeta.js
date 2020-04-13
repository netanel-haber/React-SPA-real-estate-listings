const { Schema } = require('mongoose');
const { nadlan } = require('../../../connection');
const mitigatingCompany = require('../../users/MitigatingCompany');
const contact = require('../../contact');

const listingMetadataSchema = new Schema({
    mitigatingCompany: {
        type: mitigatingCompany,
        default: null
    },
    ...contact,
    listerId: {
        type: Schema.Types.ObjectId,
        validate: [(val) => nadlan.models.Lister.findById(val),
            'lister id does not seem to exist'],
        required: true,
    },
    deletedAt: Date,
    pictureKeys: [String]
}, {
    timestamps: true
});


module.exports = listingMetadataSchema;