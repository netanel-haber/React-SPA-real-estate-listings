import React from 'react';
import Loader from "react-spinners/PulseLoader";
import { sSize } from '../styles/base/_settings.scss';

const WithLoader = ({ loaderProps, children, loading }) => {
    const loadingStyling = { opacity: 0.5, pointerEvents: "none" };
    const doneLoadingStyling = { opacity: 1 };
    return (
        <>
            {React.cloneElement(children, {
                style: loading
                    ? loadingStyling
                    : doneLoadingStyling
            },
            )}
            <Loader loading={loading} margin={sSize} {...loaderProps} />
        </>
    )
}

export default WithLoader;
