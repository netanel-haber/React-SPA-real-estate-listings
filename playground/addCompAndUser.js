const { Lister, MitigatingCompany } = require('../db/mongo/Index');
const mongoose = require('mongoose');


const _id = mongoose.Types.ObjectId();
const mitigatingCompany = { _id, h: "fsdfsd" };

const listerId = mongoose.Types.ObjectId();
const lister = { _id: listerId, mitigatingCompanyId: _id }

new MitigatingCompany(mitigatingCompany).save()
    .then(() => new Lister(lister).save())
    .then(console.log)
    .catch(console.error)

