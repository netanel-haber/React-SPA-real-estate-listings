const listingsPrefix = "/listings"
const paths = {
    login: "/login",
    signup: "/signup",
    personal: "/personal",
    addListing: "/add-listings",
    myProfile: "/my-profile",
    listingsPrefix,
    listings: `${listingsPrefix}/:type`,
};

export { paths }