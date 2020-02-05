import React from 'react';
import '../../styles/components/ImageColumn.scss';
import Pill from './../Pill';

function onClick(e) {
    alert("hello!");
}

const ImageColumn = (props) => {
    return (
        <div className="ImageColumn" onClick={onClick}>
            <div>
                <div className="MiniItem__thumbnail-container-parent">
                    <div className="thumbnail-container">
                        <div className="overlay">
                            <Pill rootWidth="5rem" fontSize="1rem" text="4+" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default ImageColumn;