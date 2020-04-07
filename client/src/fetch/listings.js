import fetchHandler from './fetchHandler';

const getListings = (type, options = {}, signal) => {
    return fetchHandler(`/api/listings/${type}`, "POST", options, signal)
}

const countDocs = (type, filters = {}, signal) => {
    return fetchHandler(`/api/listings/count/${type}`, "POST", { filters }, signal)
};

const getRest = (type, id) => fetchHandler(`/api/listings/${type}/${id}`)

const addListing = (data) => fetchHandler('/api/listings/add-listing', "POST", data)


export { getListings, getRest, countDocs, addListing };