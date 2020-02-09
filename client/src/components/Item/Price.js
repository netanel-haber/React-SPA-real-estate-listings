import React, { useContext } from 'react';
import ItemContext from '../../contexts/ItemContext';
import ColumnInnerChild from './ColumnInnerChild';

const { HEB_PRICE_NOT_SET, HEB_NIS } = {
    HEB_PRICE_NOT_SET: "לא צוין מחיר",
    HEB_NIS: "₪"
};

const Price = () => {
    const { propertyLevel1: { price, mitigator }, listing: { updatedAt } } = useContext(ItemContext);
    const title = price ? `${price} ${HEB_NIS}` : HEB_PRICE_NOT_SET,
        subtitle = mitigator || (updatedAt);
    return (
        <div className="PriceColumn">
            <ColumnInnerChild title={title} subtitle={subtitle} />
        </div>
    )
};

export default Price;
