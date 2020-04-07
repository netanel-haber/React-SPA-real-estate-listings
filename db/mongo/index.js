const { nadlan } = require('./connection');


module.exports = {
    Cities: nadlan.model('City', require('./schemas/cities/citySchema')),
    Lister: nadlan.model('Lister', require('./schemas/users/Lister')),
    MitigatingCompany: nadlan.model('MitigatingCompany', require('./schemas/users/MitigatingCompany')),
    ForsaleListing: nadlan.model('ForsaleListing', require('./schemas/listings/ForsaleListing')),
    RentListing: nadlan.model('RentListing', require('./schemas/listings/RentListing')),
    CommercialListing: nadlan.model('CommercialListing', require('./schemas/listings/CommercialListing')),
    RoommatesListing: nadlan.model('RoommatesListing', require('./schemas/listings/RoommatesListing'))
}




















