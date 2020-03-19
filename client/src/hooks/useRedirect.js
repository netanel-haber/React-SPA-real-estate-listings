import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import SkyLightStateless from 'react-skylight/lib/skylightstateless';
import { paths } from '../components/pages/paths';

const { HEB_NO_AUTH, HEB_LOGIN, HEB_SIGNUP, HEB_HOMEPAGE, HEB_TITLE } = {
    HEB_NO_AUTH: "אינך רשאי לגשת לדף זה משום שאינך מחובר לחשבונך האישי.",
    HEB_LOGIN: "התחבר",
    HEB_SIGNUP: "הרשם",
    HEB_HOMEPAGE: "דף הבית",
    HEB_TITLE: "אינך מחובר לחשבונך האישי."
}

const pathEntries = [[paths.login, HEB_LOGIN], [paths.signup, HEB_SIGNUP], ['/', HEB_HOMEPAGE]]


export default function useRedirect(failedAuth) {
    const history = useHistory();
    return (
        <SkyLightStateless onCloseClicked={() => { history.push('/') }} hideOnOverlayClicked className="f" isVisible={failedAuth} title={HEB_TITLE}>
            {pathEntries.map(([path, text], index) => <button key={index} onClick={() => { history.push(path) }}>{text}</button>)}
        </SkyLightStateless>
    )
}