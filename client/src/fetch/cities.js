import fetchHandler from './fetchHandler';

const getCities = () => {
    return fetchHandler('/api/cities');
}

const getStreets = (city) => {
    return fetchHandler('/api/cities/streets', "POST", { city });
}


export { getCities, getStreets }