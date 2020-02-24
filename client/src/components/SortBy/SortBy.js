import React from 'react';
import '../../styles/components/SortBy/SortBy.scss';
import SelectSort from './SelectSort';

const { HEB_ONLY_WITH_PIC, HEB_ONLY_WITH_PRICE, HEB_FILTER } = {
    HEB_ONLY_WITH_PRICE: "מחיר",
    HEB_FILTER: "סנן מודעות בלי:",
    HEB_ONLY_WITH_PIC: "תמונה"
}


const SortBy = () => {
    return (
        <div className="SortBy">
            <SelectSort />
        </div>
    )
}

export default SortBy;