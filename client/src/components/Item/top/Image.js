import React, { useContext, useState } from 'react';
import ItemContext from '../../../contexts/ItemContext';
import Pill from '../../Pill';
import Thumbnail from '../../Thumbnail';
import Modal from './Modal';


const Image = () => {
    const { urls, error } = useContext(ItemContext);
    const [isOpen, toggle] = useState(false);
    const openModal = (isOpen && urls.length > 0);
    return (
        <div className="ImageColumn" onClick={(e) => { e.stopPropagation(); toggle(!isOpen); }}>
            <div className="ColumnChild">
                <Thumbnail url={{ url: urls[0], error }}>
                    <Pill rootWidth="4rem" fontSize="1rem" text={urls.length ? urls.length - 1 + "+" : "0"} />
                </Thumbnail>
            </div>
            {openModal && <Modal />}
        </div>
    )
};


export default Image;