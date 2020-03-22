import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../fetch/listers';
import { HEB } from './heb';
import { paths } from '../pages/paths';
import toaster from '../../utilities/toaster';

const {
    HEB_LOGOUT,
    HEB_LOGGED_OUT_SUCCESSFULLY = "התנתקת בהצלחה! מייד תועבר לדף הבית.",
    HEB_NOT_LOGGED_IN = "לא היית מחובר.",
    HEB_ERROR = "אירעה תקלה. נסי\\ה שוב."
} = HEB;
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
                .catch((ex) => {
                    if (ex?.status !== 401)
                        toaster(HEB_ERROR)
                    else
                        toaster(HEB_NOT_LOGGED_IN, "warn")
                })
        }}>{HEB_LOGOUT}</a>
    )
};


export default LogoutLink;