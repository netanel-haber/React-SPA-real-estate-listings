import fetchHandler from './fetchHandler';

const getCities = () => {
    return fetchHandler('/json/cities.json');
}



export { getCities }