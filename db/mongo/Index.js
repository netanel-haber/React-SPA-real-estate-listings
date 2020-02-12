const { nadlan } = require('./connection');

module.exports = {
    ForsaleListing: nadlan.model('ForsaleListing', require('./schemas/listings/ForsaleListing')),
    RentListing: nadlan.model('RentListing', require('./schemas/listings/RentListing')),
    CommercialListing: nadlan.model('CommercialListings', require('./schemas/listings/CommercialListing')),
    RoommateListing: nadlan.model('RoommateListing', require('./schemas/listings/RoommatesListing')),
    Lister: nadlan.model('Lister', require('./schemas/users/Lister')),
    MitigatingCompany: nadlan.model('MitigatingCompany', require('./schemas/users/MitigatingCompany'))
}


















