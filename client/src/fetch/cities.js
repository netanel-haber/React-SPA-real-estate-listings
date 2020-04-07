import fetchHandler from './fetchHandler';

const getCities = () => {
    return fetchHandler('/api/cities');
}

const getStreets = (city) => {
    return fetchHandler('/api/cities/streets', "POST", { city });
}

const searchCities = (term) => {
    return fetchHandler('/api/cities/search', "POST", { term })
}

const searchStreets = (term) => {
    return fetchHandler('/api/cities/streets/search', "POST", { term })
}


export { getCities, getStreets, searchStreets, searchCities }