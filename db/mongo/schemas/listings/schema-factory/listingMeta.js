const { Schema } = require('mongoose');
const { nadlan } = require('../../../connection');


const listingMetadataSchema = new Schema({
    mitigatingCompany: {
        type: Schema.Types.ObjectId,
        ref: 'MitigatingCompany'
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


listingMetadataSchema.post('save', async (doc) => {
    try {
        const { Lister, MitigatingCompany } = nadlan.models;
        let { mitigatingCompanyId } = await Lister.findById(doc.listerId);
        let mc = await MitigatingCompany.findById(mitigatingCompanyId);
        doc.mitigatingCompany = mc;
    }
    catch (ex) {
        throw ex;
    }
})

module.exports = listingMetadataSchema;