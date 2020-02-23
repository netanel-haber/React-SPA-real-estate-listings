import React, { useEffect, useState } from 'react';
import useSpinnerBeforeImageLoad from '../../../hooks/useSpinnerBeforeImageLoad';
import PulseLoader from "react-spinners/PulseLoader";

const ImageWithLoader = ({ url, loaderSize = "5rem" }) => {
    const [loading, display, done] = useSpinnerBeforeImageLoad(url);
    return (
        <>
            <PulseLoader loading={loading} size={loaderSize} />
            <img
                style={{ display }}
                onLoad={done}
                className="image"
                src={url}>
            </img>
        </>
    );
}

export default ImageWithLoader;
