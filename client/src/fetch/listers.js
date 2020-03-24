import fetchHandler from './fetchHandler';


const signup = (data) => {
    return fetchHandler('/api/listers/signup', "POST", data);
}

const isLoggedIn = () => {
    return fetchHandler('/api/listers/logged-in');
}

const getListingsForLister = () => {
    return fetchHandler('/api/listers/me/listings')
}

const logout = () => {
    return fetchHandler('/api/listers/logout', "PATCH", ...[, ,], true);
}

const login = (data) => {
    return fetchHandler('/api/listers/login', "POST", data);
}

const getLister = (id) => {
    return fetchHandler(`/api/listers/${id}`);
}

const getProfile = () => {
    return fetchHandler(`/api/listers/me`);
}

export { signup, getLister, login, getProfile, logout, isLoggedIn, getListingsForLister }

