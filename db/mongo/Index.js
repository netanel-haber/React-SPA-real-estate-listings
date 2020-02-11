require('dotenv').config();
const mongoose = require('mongoose');

const uri = `mongodb+srv://masterNetanel:${process.env.MONGODB_PASSWORD}@nadlan-msbha.mongodb.net/nadlan`;

const connect = async () => {
    try {
        const nadlan = await mongoose.createConnection(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connected");
        return {
            Forsale: nadlan.model('Forsale', require('./schemas/listings/Forsale')),
            Rent: nadlan.model('Rent', require('./schemas/listings/Rent')),
            Commercial: nadlan.model('Commercial', require('./schemas/listings/Commercial')),
            Roommates: nadlan.model('Roommates', require('./schemas/listings/Roommates')),
            Listers: nadlan.model('Listers', require('./schemas/users/Listers')),
            Mitigators: nadlan.model('Mitigators', require('./schemas/users/MitigatingCompanies'))
        }
    }
    catch (ex) {
        console.log(ex);
    }
}


let exp = connect();
console.log(exp);

// module.exports = exp;











