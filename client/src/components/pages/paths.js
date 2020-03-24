const listingsPrefix = "/listings"
const listersPrefix = "/listers"

const paths = {
    login: `${listersPrefix}/login`,
    signup: `${listersPrefix}/signup`,
    personal: `${listersPrefix}/personal`,
    addListing: `${listersPrefix}/add-listing`,
    myListings: `${listersPrefix}/me/listings`,
    logout: `${listersPrefix}/logout`,
    listingsPrefix,
    listings: `${listingsPrefix}/:type`,
};

export { paths }