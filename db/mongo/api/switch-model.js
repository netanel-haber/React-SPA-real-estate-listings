const {
    ForsaleListing,
    RentListing,
    CommercialListing,
    RoommatesListing
} = require('../index');



module.exports = function modelOf(path) {
    switch (path) {
        case "forsale":
            return ForsaleListing
        case "rent":
            return RentListing
        case "commercial":
            return CommercialListing
        case "roommates":
            return RoommatesListing
    }
}

