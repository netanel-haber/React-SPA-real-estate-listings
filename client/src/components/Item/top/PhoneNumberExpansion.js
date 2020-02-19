import React, { useContext, useEffect, useState } from 'react';
import ItemContext from '../../../contexts/ItemContext';
import { getLister } from '../../../fetch/data';
import '../../../styles/components/Item/PhoneNumberExpansion.scss';

const { HEB_WEBSITE } = {
    HEB_WEBSITE: "אתר המשרד"
}


const PhoneNumberExpansion = ({ isExpanded = false }) => {
    const { listing: { mitigatingCompany, listerId } } = useContext(ItemContext);
    const [details, updateDetails] = useState([]);

    useEffect(() => {
        if (mitigatingCompany) {
            const { name, phoneNumbers, website } = mitigatingCompany;
            updateDetails([name, phoneNumbers.join?.(', '), website && (<a target="_blank" href={website}>{HEB_WEBSITE}</a>)]);
        }
        else
            getLister(listerId).then(({ name, phoneNumber, email }) => { updateDetails([name, phoneNumber, email]) })
    }, []);

    return (
        <div className="PhoneNumberExpansion" style={{ maxHeight: isExpanded ? "200px" : "0" }}>
            {details.filter(deet => Boolean(deet)).map(deet => <div className="child">{deet}</div>)}
        </div>
    );
};

export default PhoneNumberExpansion;
