import React from 'react';
import useSpinnerBeforeImageLoad from '../../../hooks/useSpinnerBeforeImageLoad';
import PulseLoader from "react-spinners/PulseLoader";

const ImageWithLoader = ({ url, loaderSize = "5rem" }) => {
    const [loading, visibility, done] = useSpinnerBeforeImageLoad();
    return (
        <>
            <PulseLoader loading={loading} size={loaderSize} />
            <img
                style={{ visibility }}
                onLoad={done}
                className="image"
                src={url}>
            </img>
        </>
    );
}

export default ImageWithLoader;
