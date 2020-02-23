import React from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import useSpinnerBeforeImageLoad from '../hooks/useSpinnerBeforeImageLoad';
import '../styles/components/Item/ImageContainer.scss';

const rem = (val) => val + "rem";
const ImageContainer = ({ height, width = height * (5 / 3), url, children }) => {
    const [loading, visibility, done] = useSpinnerBeforeImageLoad();
    return (
        <div style={{ height: rem(height), width: rem(width) }} className="image-container">
            <div className="overlay">
                {children}
            </div>
            <PulseLoader loading={loading} size="0.75rem" />
            <img className="image" onLoad={done} style={{ visibility }} src={url}></img>
        </div>
    )
}



export default ImageContainer;
