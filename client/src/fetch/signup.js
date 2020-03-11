import fetchPost from './fetchPost';


const signup = (data) => {
    return fetchPost('/api/users/signup', data).then(res => res.json())
}

export { signup }