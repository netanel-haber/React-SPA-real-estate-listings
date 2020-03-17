import fetchPost from './fetchPost';

const signup = (data) => {
    return fetchPost('/api/listers/signup', data).then(res => res.json())
}

const login = (data) => {
    return fetchPost('/api/listers/login', data).then(res => res.json())
}

const getLister = (id) => fetch(`/api/listers/${id}`)
    .then(res => res.json());


export { signup, getLister, login }

