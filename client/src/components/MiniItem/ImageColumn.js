import React from 'react';
import Pill from './../Pill';
import Thumbnail from './../Thumbnail';

function onClick(e) {
    alert("hello!");
}


const ImageColumn = ({ thumbData: { url, numPics } }) => {
    return (
        <div className="ImageColumn" onClick={onClick}>
            <div>
                <Thumbnail url={url}>
                    <Pill rootWidth="4rem" fontSize="1rem" text={numPics + "+"} />
                </Thumbnail>
            </div>
        </div>
    )
};


export default ImageColumn;