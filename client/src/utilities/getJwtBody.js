import parseJwt from './parseJwt';

const getJwtBody = () => {
    return parseJwt(localStorage.getItem('token')).payload;
}

export default getJwtBody;
