const getListings = (type, filters) =>
    fetch(`/api/data/${type}`, {
        method: 'POST',
        body: JSON.stringify(filters),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())


const getRest = (type, id) => fetch(`/api/data/${type}/spec/${id}`)
    .then(res => res.json());


const countDocs = (type) => fetch(`/api/data/${type}/count`)
    .then(res => res.json());

export { getListings, getRest, countDocs };