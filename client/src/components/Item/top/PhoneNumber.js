import React, { useContext } from 'react';
import ItemContext from '../../../contexts/ItemContext';
import useLoadOnceThenToggle from '../../../hooks/useLoadOnceThenToggle';
import '../../../styles/components/Item/PhoneNumberButton.scss';
import PhoneNumberExpansion from './PhoneNumberExpansion';

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
                        <img alt="" src="/icons/phone.png"></img>
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