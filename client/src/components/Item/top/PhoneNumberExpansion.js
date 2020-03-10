import React, { useContext, useEffect, useState } from 'react';
import Loader from "react-spinners/PulseLoader";
import ItemContext from '../../../contexts/ItemContext';
import { getLister } from '../../../fetch/data';
import '../../../styles/components/Item/PhoneNumberExpansion.scss';
import copyToClipBoard from '../../../utilities/copyToClipboard';


const { HEB_WEBSITE, HEB_COPY_EMAIL } = {
    HEB_WEBSITE: "אתר המשרד",
    HEB_COPY_EMAIL: "העתק כתובת מייל"
}

const extractMitDetails = ({ name, phoneNumbers, website }) =>
    ([name, phoneNumbers.join?.(', '), website && (<a rel="noopener noreferrer" target="_blank" href={website}>{HEB_WEBSITE}</a>)]);
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
                ? extractMitDetails(mitigatingCompany)
                : (regListerDetails.length!==0
                    ? extractRegListerDetails(regListerDetails)
                    : [<Loader loading size="1rem" />]))
                .map((deet, index) => <div key={index} className="child">{deet}</div>)
            }
        </div>
    );
};


export default PhoneNumberExpansion;
