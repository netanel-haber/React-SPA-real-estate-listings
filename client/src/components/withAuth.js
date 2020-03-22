import React from 'react';
import { useStatefulRedirect } from '../hooks/useRedirect';

const { HEB_WAIT = " מייד תועברו לדף המבוקש..." } = {};


const Auth = ({ children: el }) => {
    const [prompt, authDidFail] = useStatefulRedirect();
    return (
        <>
            {authDidFail === undefined && (
                <div>
                    <div className="gen-page">
                        <div style={{ padding: "10px" }}>
                            <p>{HEB_WAIT}</p>
                        </div>
                    </div>
                </div>
            )}
            {authDidFail === false && el}
            {prompt}
        </>
    )
}


const withAuth = (el) => <Auth>{el}</Auth>

export default withAuth;