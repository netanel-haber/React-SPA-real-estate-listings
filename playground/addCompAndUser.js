const { Lister, MitigatingCompany } = require('../db/mongo/Index');
const { listerId, mitigatingCompanyId } = require('./ids');
const mongoose = require('mongoose');


const mitigatingCompany = { _id: mitigatingCompanyId, name: "יוסי תיווך בע\"מ" };//, email:"a@g.com" };
const lister = { _id: listerId, mitigatingCompanyId }

new MitigatingCompany(mitigatingCompany).save()
    .then(() => new Lister(lister).save())
    .then(console.log)
    .catch(console.error)

