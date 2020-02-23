import React, { useContext, useState } from 'react';
import '../../../styles/components/Item/Modal.scss';
import ItemContext from '../../../contexts/ItemContext';
import PulseLoader from "react-spinners/PulseLoader";
import useSpinnerBeforeImageLoad from '../../../hooks/useSpinnerBeforeImageLoad';

const { HEB_FROM, HEB_PIC } = {
    HEB_FROM: "מתוך",
    HEB_PIC: "תמונה"
}

const Modal = () => {
    const { urls } = useContext(ItemContext);
    const [loading, visibility, done] = useSpinnerBeforeImageLoad();
    const [currentIndex, inc] = useState(0);
    let actualCurrentIndex = Math.abs(currentIndex) % urls.length;
    return (
        <div className="modal">
            <div className="content-container">
                <div className="image-child">
                    <div className="toggle-pics" onClick={(e) => { e.stopPropagation(); inc(currentIndex - 1) }}>❯</div>
                    <div className="image-container">
                        <PulseLoader loading={loading} size="5rem" />
                        <img
                            style={{ visibility }}
                            onLoad={done}
                            className="current-image"
                            src={urls[actualCurrentIndex]}>
                        </img>
                    </div>
                    <div className="toggle-pics" onClick={(e) => { e.stopPropagation(); inc(currentIndex + 1) }}>❮</div>
                </div>
                <div className="number-child">
                    {HEB_PIC} {actualCurrentIndex + 1} {HEB_FROM} {urls.length}
                </div>
            </div>
        </div>
    )
}

export default Modal;
