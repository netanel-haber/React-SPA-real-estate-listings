let counter = 0;

const getListings = (type) => fetch(`/api/data/${type}`)
    .then(res => res.json());
const getRest = (type, id) => fetch(`/api/data/${type}/${id}`)
    .then(res => res.json()).then((res) => {
        console.log(`number of times rest was fetched: ${++counter}`);
        return res;
    });


export { getListings, getRest };