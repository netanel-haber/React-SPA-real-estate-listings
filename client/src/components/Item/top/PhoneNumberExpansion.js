import React, { useContext, useEffect, useState } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import ItemContext from '../../../contexts/ItemContext';
import { getLister } from '../../../fetch/data';
import '../../../styles/components/Item/PhoneNumberExpansion.scss';
import copyToClipBoard from '../../../utilities/copyToClipboard';


const { HEB_WEBSITE, HEB_COPY_EMAIL } = {
    HEB_WEBSITE: "אתר המשרד",
    HEB_COPY_EMAIL: "העתק כתובת מייל"
}

const extractMitDetails = ({ name, phoneNumbers, website }) =>
    ([name, phoneNumbers.join?.(', '), website && (<a target="_blank" href={website}>{HEB_WEBSITE}</a>)]);
const extractRegListerDetails = ({ name, phoneNumber, email }) =>
    ([name, phoneNumber, email && (<span onClick={(e) => { e.stopPropagation(); copyToClipBoard(email); }}>{HEB_COPY_EMAIL}</span>)])


const PhoneNumberExpansion = ({ isExpanded }) => {
    const { listing: { mitigatingCompany, listerId } } = useContext(ItemContext);
    const [regListerDetails, updateRegUserDetails] = useState([]);

    useEffect(() => {
        if (!mitigatingCompany)
            getLister(listerId).then(({ name, phoneNumber, email }) => {
                updateRegUserDetails({ name, phoneNumber, email })
            })
    }, []);

    return (
        <div className="PhoneNumberExpansion" style={{ maxHeight: isExpanded ? "200px" : "0" }}>
            {(mitigatingCompany
                ? (extractMitDetails(mitigatingCompany))
                : (regListerDetails.length
                    ? ([<PulseLoader loading={true} size="1rem" />])
                    : (extractRegListerDetails(regListerDetails))))
                .map(deet => <div className="child">{deet}</div>)
            }
        </div>
    );
};

export default PhoneNumberExpansion;
