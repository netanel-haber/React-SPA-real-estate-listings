import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../fetch/listers';
import { HEB } from './heb';
import { paths } from '../pages/paths';

const { HEB_LOGOUT } = HEB;
const { logoutPath } = paths;

const LogoutLink = () => {
    const history = useHistory();
    return (
        <a className="Header__link pure-menu-link" onClick={() => {
            logout().then(() => { history.push(logoutPath) })
        }}>{HEB_LOGOUT}</a>
    )
};


export default LogoutLink;