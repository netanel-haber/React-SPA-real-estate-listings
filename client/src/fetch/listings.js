import fetchPost from './fetchPost';


const getListings = (type, options = {}, signal) => {
    return fetchPost(`/api/listings/${type}`, options, signal).then(res => res.json())
}

const countDocs = (type, filters = {}, signal) => {
    return fetchPost(`/api/listings/count/${type}`, { filters }, signal)
        .then(res => res.json())
};

const getRest = (type, id) => fetch(`/api/listings/${type}/${id}`)
    .then(res => res.json());



export { getListings, getRest, countDocs };