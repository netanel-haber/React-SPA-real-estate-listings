const getListings = (type, filters = {}, options = {}) =>
    fetch(`api/data/listings/${type}`, {
        method: 'POST',
        body: JSON.stringify({ filters, options }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())


const getRest = (type, id) => fetch(`api/data/listings/${type}/${id}`)
    .then(res => res.json());


const countDocs = (type) => fetch(`api/data/listings/count/${type}`)
    .then(res => res.json());


const getLister = (id) => fetch(`api/data/listers/${id}`)
    .then(res => res.json());



export { getListings, getRest, countDocs, getLister };