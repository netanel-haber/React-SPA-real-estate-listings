import React from 'react';
import Pill from './Pill';



const ThumbnailContainer = ({ componenent }) => {
    <div className={`${componenent}__container-parent`}>
        <div className={`${componenent}__container`}>
            <div className={`${componenent}__overlay`}></div>
        </div>
    </div>
};

export default ThumbnailContainer;
