import React from 'react';
import Loader from "react-spinners/PulseLoader";
import useSpinnerBeforeImageLoad from '../../../hooks/useSpinnerBeforeImageLoad';

const ImageWithLoader = ({ url, loaderSize = "5rem" }) => {
    const [loading, done] = useSpinnerBeforeImageLoad(url);
    return (
        <>
            <Loader loading={loading} size={loaderSize} />
            <img
                style={{ display: loading ? "none" : "inline" }}
                onLoad={done}
                className="image"
                alt="תמונה של הנכס"
                // src={url}
                >
            </img>
        </>
    );
}

export default ImageWithLoader;
