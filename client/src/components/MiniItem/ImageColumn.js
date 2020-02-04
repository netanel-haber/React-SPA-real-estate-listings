import React from 'react';
import '../../styles/components/ImageColumn.scss';


function onClick(e) {
    alert("hello!");
}


const ImageColumn = (props) => {

    return (
        <div className="ImageColumn" onClick={onClick}>
            <div>
                <div className="MiniItem__thumbnail-container-parent">
                    <div className="MiniItem__thumbnail-container">
                        <div className="overlay">
                            <div className="pill">
                                <div className="pill-a">
                                    <div className="pill-b">
                                        <span className="pill-text">4+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default ImageColumn;