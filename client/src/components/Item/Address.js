import React, { useContext } from 'react';
import ItemContext from '../../contexts/ItemContext';
import ColumnInnerChild from './ColumnInnerChild';


const Address = (props) => {
    const { propertyLevel1: { type, address: { municipality, area, street, number } } } = useContext(ItemContext);
    return (
        <div className="AddressColumn">
            <ColumnInnerChild title={`${street} ${number}`} subtitle={`${type}, ${area}, ${municipality}`} />
        </div>
    );
}

export default Address;