const listingsPrefix = "/listings"
const listersPrefix = "/listers"

const paths = {
    login: `${listersPrefix}/login`,
    signup: `${listersPrefix}/signup`,
    personal: `${listersPrefix}/personal`,
    addListing: `${listersPrefix}/add-listing`,
    myProfile: `${listersPrefix}/me`,
    logout: `${listersPrefix}/logout`,
    listingsPrefix,
    listings: `${listingsPrefix}/:type`,
};

export { paths }