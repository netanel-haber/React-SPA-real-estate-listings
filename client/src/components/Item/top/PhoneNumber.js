import React, { useState, useContext } from 'react';
import ItemContext from '../../../contexts/ItemContext';
import PhoneNumberExpansion from './PhoneNumberExpansion';
import '../../../styles/components/Item/PhoneNumberButton.scss';
import useLoadOnceThenToggle from '../../../hooks/useLoadOnceThenToggle';

const { HEB_CONTACT, HEB_MITIGATING_COMPANY } = {
    HEB_CONTACT: "פרטי איש קשר",
    HEB_MITIGATING_COMPANY: "פרטי משרד תיווך"
};

const PhoneNumber = () => {
    const [wasExpanded, isExpanded, toggle] = useLoadOnceThenToggle();
    const { listing: { mitigatingCompany } } = useContext(ItemContext);
    return (
        <div className="PhoneNumberColumn">
            <div onClick={(e) => { e.stopPropagation(); toggle(); }}>
                <div className="phone-number-button-and-expansion-positioner-and-column-child">
                    <div className="show-phone-number-button">
                        <img src="/icons/phone.png"></img>
                        <div>
                            {mitigatingCompany ? HEB_MITIGATING_COMPANY : HEB_CONTACT}
                        </div>
                    </div>
                    {wasExpanded && (<PhoneNumberExpansion {...{ isExpanded }} />)}
                </div>
            </div>
        </div>
    )
}

export default PhoneNumber;