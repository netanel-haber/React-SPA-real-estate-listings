const { MitigatingCompany } = require('../db/mongo/Index');
const { mitigatingCompanyId } = require('./ids');

const mitigatingCompany = {
    _id: mitigatingCompanyId,
    phoneNumbers: ["0548391043", "0548976321"],
    name: "יוסי תיווך בע\"מ"
};

new MitigatingCompany(mitigatingCompany).save().then(console.log);




