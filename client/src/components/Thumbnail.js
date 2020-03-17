import React from 'react';
import '../styles/components/Item/Thumbnail.scss';
import ImageWithLoader from './Item/top/ImageWithLoader';

const Thumbnail = ({ url, children }) => {
    return (
        <div className="thumbnail-container">
            <div className="overlay">
                {children}
            </div>
            <ImageWithLoader url={url} />
        </div>
    )
}



export default Thumbnail;
