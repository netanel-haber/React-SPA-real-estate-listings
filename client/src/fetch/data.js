import fetchPost from './fetchPost';


const getListings = (type, options = {}, signal) => {
    return fetchPost(`api/data/listings/${type}`, options, signal).then(res => res.json())
}

const countDocs = (type, filters = {}, signal) => {
    return fetchPost(`api/data/listings/count/${type}`, { filters }, signal).then(res => res.json());
};

const getRest = (type, id) => fetch(`api/data/listings/${type}/${id}`)
    .then(res => res.json());

const getLister = (id) => fetch(`api/data/listers/${id}`)
    .then(res => res.json());



export { getListings, getRest, countDocs, getLister };