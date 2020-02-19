import React, { useContext, useEffect, useState } from 'react';
import ItemContext from '../../../contexts/ItemContext';
import '../../../styles/components/Item/PhoneNumberExpansion.scss';


const PhoneNumberExpansion = ({ isExpanded = false }) => {
    const { listing: { mitigatingCompany } } = useContext(ItemContext);
    const [details, updateDetails] = useState([]);
    useEffect(() => {
        updateDetails(mitigatingCompany ? [
            mitigatingCompany?.name,
            mitigatingCompany?.phonesNumbers?.join('\n'),
            mitigatingCompany?.url || (<a href={mitigatingCompany.url}>klk</a>)]:7);
    }, [])
    return (
        <div className="PhoneNumberExpansion" style={{ maxHeight: isExpanded ? "100px" : "0" }}>
            {details.filter(deet => Boolean(deet)).map(deet => <div className="child">{deet}</div>)}
        </div>
    );
};

export default PhoneNumberExpansion;
