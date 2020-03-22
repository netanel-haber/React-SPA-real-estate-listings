const {
    ForsaleListing,
    RentListing,
    CommercialListing,
    RoommatesListing
} = require('../index');

const types = ["forsale", "rent", "commercial", "roommates"];


module.exports = {
    modelOf: function (path) {
        switch (path) {
            case types[0]:
                return ForsaleListing
            case types[1]:
                return RentListing
            case types[2]:
                return CommercialListing
            case types[3]:
                return RoommatesListing
        }
    },
    types
}

