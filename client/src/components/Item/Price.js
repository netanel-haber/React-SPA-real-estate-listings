import React, { useContext } from 'react';
import ItemContext from '../../contexts/ItemContext';
import ColumnInnerChild from './ColumnInnerChild';
import { isToday } from '../../utilities/dayjs';

const { HEB_PRICE_NOT_SET,HEB_UPDATED_TODAY } = {
    HEB_PRICE_NOT_SET: "לא צוין מחיר",
    HEB_UPDATED_TODAY: "עודכן היום"
};

const toShekel = x => x.toLocaleString() + " ₪";


const Price = () => {
    const { level1: { price, mitigator }, listing: { updatedAt } } = useContext(ItemContext);
    const title = price ? toShekel(price) : HEB_PRICE_NOT_SET;
    const subtitle = mitigator || (isToday(updatedAt) || HEB_UPDATED_TODAY);
    return (
        <div className="PriceColumn">
            <ColumnInnerChild title={title} subtitle={subtitle} />
        </div>
    )
};

export default Price;
