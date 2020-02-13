const getListings = (type) => fetch(`/api/data/${type}`)
    .then(res => res.json());
const getRest = (type, id) => fetch(`/api/data/${type}/${id}`)
    .then(res => res.json());


export { getListings, getRest };