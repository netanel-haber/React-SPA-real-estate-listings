import React, { useContext } from 'react';
import ItemContext from '../../../contexts/ItemContext';
import '../../../styles/components/Item/Footer.scss';

const { HEB_LISTING_ID } = {
    HEB_LISTING_ID: "מספר מודעה:"
}



const Footer = () => {
    const { _id } = useContext(ItemContext);
    return (
        <div className="Item__Footer">
            {`${HEB_LISTING_ID} ${_id}`}
        </div>
    )
};



export default Footer;
