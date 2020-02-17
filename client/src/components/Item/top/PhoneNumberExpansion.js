import React, { useContext, useEffect } from 'react';
import ItemContext from '../../../contexts/ItemContext';
import '../../../styles/components/Item/PhoneNumberExpansion.scss';

const PhoneNumberExpansion = ({ isExpanded = false }) => {
    const { listing } = useContext(ItemContext);
    return (
        <div className="PhoneNumberExpansion" style={{ maxHeight: isExpanded ? "200px" : "0" }}>
            <div className="child">
                אתי
            </div >
            <div className="child">
                0542391003
            </div>
            <div className="child">
                a@c.com
            </div>
        </div>
    );
};

export default PhoneNumberExpansion;
