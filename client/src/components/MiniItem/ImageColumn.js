import React, { useContext } from 'react';
import ItemContext from '../../contexts/ItemContext';
import Pill from './../Pill';
import Thumbnail from './../Thumbnail';

function onClick(e) {
    alert("hello!");
}

const ImageColumn = () => {
    const { urls } = useContext(ItemContext);
    return (
        <div className="ImageColumn" onClick={onClick}>
            <div className="ColumnChild">
                <Thumbnail url={urls[0]}>
                    <Pill rootWidth="4rem" fontSize="1rem" text={urls.length + "+"} />
                </Thumbnail>
            </div>
        </div>
    )
};


export default ImageColumn;