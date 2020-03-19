import "#src#/styles/components/RedirectPrompt.scss";
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { paths } from '../components/pages/paths';

const { HEB_NO_AUTH, HEB_LOGIN, HEB_SIGNUP, HEB_HOMEPAGE } = {
    HEB_NO_AUTH: "אינך רשאי לגשת לדף זה משום שאינך מחובר לחשבונך האישי.",
    HEB_LOGIN: "התחבר",
    HEB_SIGNUP: "הרשם",
    HEB_HOMEPAGE: "דף הבית",
}

const pathEntries = [[paths.login, HEB_LOGIN], [paths.signup, HEB_SIGNUP], ['/', HEB_HOMEPAGE]]


export default function useRedirect(failedAuth) {
    const history = useHistory();
    return (
        <div className="RedirectPrompt" style={{ display: failedAuth ? "flex" : "hidden" }} onClick={() => { history.push('/') }}>
            <div onClick={(e) => { e.stopPropagation() }} className="content-container">
                <div>
                    <div className="title">{HEB_NO_AUTH}</div>
                    <div className="RedirectPrompt__link-group pure-g">
                        {pathEntries.map(([path, text], index) => (
                            <div
                                className="RedirectPrompt__link pure-u-1 pure-u-md-1-3"
                                key={index}
                                onClick={() => { history.push(path) }}>{text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

