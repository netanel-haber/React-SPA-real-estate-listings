const fetchPost = (path, body) => {
    return fetch(path, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    })
}


const getListings = (type, filters = {}, options = {}) =>
    fetchPost(`api/data/listings/${type}`, { filters, options }).then(res => res.json())

const countDocs = (type, filters = {}) => {
    return fetchPost(`api/data/listings/count/${type}`, { filters }).then(res => res.json());
};



const getRest = (type, id) => fetch(`api/data/listings/${type}/${id}`)
    .then(res => res.json());

const getLister = (id) => fetch(`api/data/listers/${id}`)
    .then(res => res.json());



export { getListings, getRest, countDocs, getLister };