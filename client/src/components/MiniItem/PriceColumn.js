import React from 'react';
import ColumnInnerChild from './ColumnInnerChild';

const { HEB_PRICE_NOT_SET, HEB_NIS } = {
    HEB_PRICE_NOT_SET: "לא צוין מחיר",
    HEB_NIS: "₪"
};

const PriceColumn = ({ price, mitigator, updatedAt }) => {
    const title = price ? `${price} ${HEB_NIS}` : HEB_PRICE_NOT_SET,
        subtitle = mitigator || updatedAt;
    return (
        <div className="PriceColumn">
            <ColumnInnerChild title={title} subtitle={subtitle} />
        </div>
    )
};

export default PriceColumn;
