import React, { useState, useContext } from 'react';
import ItemContext from '../../../contexts/ItemContext';
import PhoneNumberExpansion from './PhoneNumberExpansion';
import '../../../styles/components/Item/PhoneNumberButton.scss';

const { HEB_CONTACT, HEB_MITIGATING_COMPANY } = {
    HEB_CONTACT: "פרטי איש קשר",
    HEB_MITIGATING_COMPANY: "פרטי משרד תיווך"
};

const PhoneNumber = () => {
    const [isExpanded, toggleExpansion] = useState(false);
    const [wasExpanded, loadExpandedData] = useState(false);
    const { listing: { mitigatingCompany } } = useContext(ItemContext);

    const onClick = (e) => {
        e.stopPropagation();
        if (!wasExpanded) loadExpandedData(true);
        toggleExpansion(!isExpanded);
    }
    return (
        <div className="PhoneNumberColumn">
            <div onClick={onClick}>
                <div className="phone-number-button-and-expansion-positioner-and-column-child">
                    <div className="show-phone-number-button">
                        <img src="/icons/phone.png"></img>
                        <div>
                            {mitigatingCompany ? HEB_MITIGATING_COMPANY : HEB_CONTACT}
                        </div>
                    </div>
                    {wasExpanded && (<PhoneNumberExpansion  isExpanded={isExpanded} />)}
                </div>
            </div>
        </div>
    )
}

export default PhoneNumber;