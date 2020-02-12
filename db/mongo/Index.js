require('dotenv').config();
const { nadlan } = require('./connection');

const models =
{
    ForsaleListing: nadlan.model('ForsaleListing', require('./schemas/listings/Forsale')),
    RentListing: nadlan.model('RentListing', require('./schemas/listings/Rent')),
    CommercialListing: nadlan.model('CommercialListings', require('./schemas/listings/Commercial')),
    RoommateListing: nadlan.model('RoommateListing', require('./schemas/listings/Roommates')),
    Lister: nadlan.model('Lister', require('./schemas/users/Listers')),
    MitigatingCompany: nadlan.model('MitigatingCompany', require('./schemas/users/MitigatingCompanies'))
}


module.exports = models;


















