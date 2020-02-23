import React, { useContext, useState } from 'react';
import ItemContext from '../../../contexts/ItemContext';
import Pill from '../../Pill';
import ImageContainer from '../../ImageContainer';
import Modal from './Modal';


const Image = ({ thumbHeight }) => {
    const { urls } = useContext(ItemContext);
    const [isOpen, toggle] = useState(false);
    return (
        <div className="ImageColumn" onClick={(e) => { e.stopPropagation(); toggle(!isOpen); }}>
            <div className="ColumnChild">
                <ImageContainer height={thumbHeight} url={urls[0]}>
                    <Pill rootWidth="4rem" fontSize="1rem" text={urls.length - 1 + "+"} />
                </ImageContainer>
            </div>
            {isOpen && <Modal/>}
        </div>
    )
};


export default Image;