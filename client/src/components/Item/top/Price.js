import React, { useContext } from 'react';
import ItemContext from '../../../contexts/ItemContext';
import ColumnInnerChild from './ColumnInnerChild';
import { isToday, format } from '../../../utilities/moment';

const { HEB_PRICE_NOT_SET, HEB_UPDATED_TODAY } = {
    HEB_PRICE_NOT_SET: "לא צוין מחיר",
    HEB_UPDATED_TODAY: "עודכן היום",
};

const toShekel = x => x.toLocaleString() + " ₪";


const Price = () => {
    const { level1, listing } = useContext(ItemContext);
    const { price } = level1;
    const { updatedAt, mitigatingCompany } = listing;
    const title = price ? toShekel(price) : HEB_PRICE_NOT_SET;
    const subtitle = mitigatingCompany?.name || (isToday(updatedAt) ? HEB_UPDATED_TODAY : format(updatedAt));
    return (
        <div className="PriceColumn">
            <ColumnInnerChild title={title} subtitle={subtitle} />
        </div>
    )
};

export default Price;
