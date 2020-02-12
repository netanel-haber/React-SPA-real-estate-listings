import React, { useContext } from 'react';
import ItemContext from '../../contexts/ItemContext';
import ColumnInnerChild from './ColumnInnerChild';

const { HEB_PRICE_NOT_SET } = {
    HEB_PRICE_NOT_SET: "לא צוין מחיר",
};

const toShekel = (x) => x.toLocaleString() + " ₪";


const Price = () => {
    const { propertyLevel1: { price, mitigator }, listing: { updatedAt } } = useContext(ItemContext);
    const title = price ? toShekel(price) : HEB_PRICE_NOT_SET,
        subtitle = mitigator || (updatedAt);
    return (
        <div className="PriceColumn">
            <ColumnInnerChild title={title} subtitle={subtitle} />
        </div>
    )
};

export default Price;
