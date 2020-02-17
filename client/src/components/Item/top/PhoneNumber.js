import React, { useState } from 'react';
import PhoneNumberExpansion from './PhoneNumberExpansion';
import '../../../styles/components/Item/PhoneNumberButton.scss';

const { HEB_CONTACT } = {
    HEB_CONTACT: "פרטי איש קשר"
};

const PhoneNumber = () => {
    const [isExpanded, expand] = useState(false);
    const onClick = (e) => {
        e.stopPropagation();
        expand(!isExpanded);
    }
    return (
        <div className="PhoneNumberColumn">
            <div onClick={onClick}>
                <div className="phone-number-button-and-expansion-positioner-and-column-child">
                    <div className="show-phone-number-button">
                        <img src="/icons/phone.png"></img>
                        <div>
                            {HEB_CONTACT}
                        </div>
                    </div>
                    <PhoneNumberExpansion isExpanded={isExpanded} />
                </div>
            </div>
        </div>
    )
}

export default PhoneNumber;