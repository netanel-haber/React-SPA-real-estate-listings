import React from 'react';
import '../styles/components/Item/Thumbnail.scss';
import ImageWithLoader from './Item/top/ImageWithLoader';

const rem = (val) => val + "rem";
const Thumbnail = ({ height, width = height * (5 / 3), url, children }) => {
    return (
        <div style={{ height: rem(height), width: rem(width) }} className="thumbnail-container">
            <div className="overlay">
                {children}
            </div>
            <ImageWithLoader loaderSize="0.4rem" url={url} />
        </div>
    )
}



export default Thumbnail;
