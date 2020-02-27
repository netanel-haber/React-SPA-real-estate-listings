import React, { useState } from 'react';
import Loader from "react-spinners/PulseLoader";

const WithLoader = ({ loaderProps, children }) => {
    const [loading, setLoading] = useState(false);
    return (
        <>
            <Loader {...loaderProps} loading={loading} />
            {React.cloneElement(children, { setLoading })}
        </>
    )
}

export default WithLoader;
