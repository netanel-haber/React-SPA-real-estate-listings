import React, { useContext } from 'react';
import ItemContext from '../../../contexts/ItemContext';
import ColumnInnerChild from './ColumnInnerChild';


const Address = (props) => {
    const { level1 } = useContext(ItemContext);
    const { type, address } = level1;
    const { municipality, area, street, number } = address;
    return (
        <div className="AddressColumn">
            <ColumnInnerChild title={`${street} ${number}`} subtitle={`${type}, ${area}, ${municipality}`} />
        </div>
    );
}

export default Address;