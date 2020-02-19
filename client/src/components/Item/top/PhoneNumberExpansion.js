import React, { useContext, useEffect, useState } from 'react';
import ItemContext from '../../../contexts/ItemContext';
import { getLister } from '../../../fetch/data';
import '../../../styles/components/Item/PhoneNumberExpansion.scss';
import ClipBoard from 'clipboard';

const { HEB_WEBSITE, HEB_COPY_EMAIL } = {
    HEB_WEBSITE: "אתר המשרד",
    HEB_COPY_EMAIL: "העתק כתובת מייל"
}

const toCopy = new ClipBoard('#toCopy');

const extractMitDetails = ({ name, phoneNumbers, website }) =>
    ([name, phoneNumbers.join?.(', '), website && (<a target="_blank" href={website}>{HEB_WEBSITE}</a>)]);
const extractRegListerDetails = ({ name, phoneNumber, email }) =>
    ([name, phoneNumber, (<span onClick={(e) => { e.stopPropagation() }} id="toCopy" data-clipboard-text={email}>{HEB_COPY_EMAIL}</span>)])



const PhoneNumberExpansion = ({ isExpanded = false }) => {
    const { listing: { mitigatingCompany, listerId } } = useContext(ItemContext);
    const [regListerDetails, updateRegUserDetails] = useState([]);
    useEffect(() => {
        if (!mitigatingCompany)
            getLister(listerId).then(({ name, phoneNumber, email }) => { updateRegUserDetails({ name, phoneNumber, email }) })
    }, []);

    return (
        <div className="PhoneNumberExpansion" style={{ maxHeight: isExpanded ? "200px" : "0" }}>
            {(mitigatingCompany
                ? extractMitDetails(mitigatingCompany)
                : extractRegListerDetails(regListerDetails))
                .map(deet => <div className="child">{deet}</div>)}
        </div>
    );
};

export default PhoneNumberExpansion;
