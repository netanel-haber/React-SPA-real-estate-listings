import fetchHandler from './fetchHandler';


const signup = (data) => {
    return fetchHandler('/api/listers/signup', "POST", data);
}

const login = (data) => {
    return fetchHandler('/api/listers/login', "POST", data);
}

const getLister = (id) => {
    return fetchHandler(`/api/listers/${id}`);
}

export { signup, getLister, login }

