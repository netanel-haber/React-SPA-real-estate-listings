import React, { useState, useEffect } from 'react';
import PhoneNumberExpansion from './PhoneNumberExpansion';


const { heb_contact } = {
    heb_contact: "פרטי איש קשר"
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
                <div className="cont">
                    <div className="show-phone-number-button">
                        <img src="/icons/phone.png"></img>
                        <div>
                            {heb_contact}
                        </div>
                    </div>
                    <PhoneNumberExpansion isExpanded={isExpanded} />
                </div>
            </div>
        </div>
    )
}

export default PhoneNumber;