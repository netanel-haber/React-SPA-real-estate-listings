import React, { useContext, useState } from 'react';
import ItemContext from '../../../contexts/ItemContext';
import '../../../styles/components/Item/Modal.scss';
import ImageWithLoader from './ImageWithLoader';

const { HEB_FROM, HEB_PIC } = {
    HEB_FROM: "מתוך",
    HEB_PIC: "תמונה"
}

const Modal = () => {
    const { urls } = useContext(ItemContext);
    const [currentIndex, inc] = useState(0);
    let actualCurrentIndex = Math.abs(currentIndex) % urls.length;
    return (
        <div className="Modal">
            <div className="Modal-ads">
                <div>
                    <img alt="ad" height="150px" width="150px" src="https://via.placeholder.com/150"></img>
                </div>
                <div>
                    <img alt="ad" height="150px" width="150px" src="https://via.placeholder.com/150"></img>
                </div>
                <div>
                    <img alt="ad" height="150px" width="150px" src="https://via.placeholder.com/150"></img>
                </div>
            </div>
            <div className="content-container">
                <div className="image-child">
                    <div className="toggle-pics" onClick={(e) => { e.stopPropagation(); inc(currentIndex + 1) }}>❯</div>
                    <div className="Modal__image-container">
                        <ImageWithLoader url={urls[actualCurrentIndex]} />
                    </div>
                    <div className="toggle-pics" onClick={(e) => { e.stopPropagation(); inc(currentIndex - 1) }}>❮</div>
                </div>
                <div className="number-child">
                    {HEB_PIC} {actualCurrentIndex + 1} {HEB_FROM} {urls.length}
                </div>
            </div>
        </div>
    )
}

export default Modal;
