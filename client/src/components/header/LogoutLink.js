import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../fetch/listers';
import { HEB } from './heb';
import { paths } from '../pages/paths';
import toaster from '../../utilities/toaster';

const { HEB_LOGOUT, HEB_LOGGED_OUT_SUCCESSFULLY = "התנתקת בהצלחה! מייד תועבר לדף הבית." } = HEB;
const { logout: logoutPath } = paths;

const LogoutLink = () => {
    const history = useHistory();
    return (
        <a className="Header__link pure-menu-link Header__logout" onClick={() => {
            logout()
                .then(() => {
                    localStorage.removeItem("token")
                    toaster(HEB_LOGGED_OUT_SUCCESSFULLY, "success")
                    history.push(logoutPath)
                })
                .catch((ex) => { console.log(ex); toaster("uh oh") })
        }}>{HEB_LOGOUT}</a>
    )
};


export default LogoutLink;