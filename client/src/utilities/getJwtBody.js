import parseJwt from './parseJwt';

const getJwtBody = () => {
    return parseJwt(localStorage.getItem('token'));
}

export default getJwtBody;
