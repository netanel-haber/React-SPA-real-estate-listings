import React from 'react';
import useSpinnerBeforeImageLoad from '../../../hooks/useSpinnerBeforeImageLoad';
import CustomLoader from '../../CustomLoader';


const ImageWithLoader = ({ url: { url, error }, scaleBy }) => {
    const [loading, done] = useSpinnerBeforeImageLoad(url);
    if (error) {
        return <img alt="לא נמצאו תמונות."></img>
    }
    return (
        <>
            <CustomLoader scaleBy={scaleBy} active={loading} />
            <img
                style={{ display: loading ? "none" : "inline" }}
                onLoad={done}
                className="image"
                alt="תמונה של הנכס"
                src={url}
            >
            </img>
        </>
    );
}

export default ImageWithLoader;
