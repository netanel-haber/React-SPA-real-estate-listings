import React from 'react';
import '../../../styles/components/SortBy/SortBy.scss';
import '../../../styles/components/SortBy/SelectSort.scss';
import SelectSort from './SelectSort';

const { HEB_ONLY_WITH_PIC, HEB_ONLY_WITH_PRICE, HEB_FILTER,
    HEB_BY_DATE, HEB_SORT_BY, HEB_CHEAP_FIRST, HEB_EXPENSIVE_FIRST } = {
    HEB_ONLY_WITH_PRICE: "מחיר",
    HEB_FILTER: "סנן מודעות בלי:",
    HEB_ONLY_WITH_PIC: "תמונה",
    HEB_SORT_BY: "מיין לפי",
    HEB_BY_DATE: "לפי תאריך",
    HEB_CHEAP_FIRST: "מחיר - מהזול ליקר",
    HEB_EXPENSIVE_FIRST: "מחיר - מהיקר לזול"
}


const sortByOptions = {
    [HEB_BY_DATE]: { updatedAt: 'desc' },
    [HEB_CHEAP_FIRST]: { price: 'asc' },
    [HEB_EXPENSIVE_FIRST]: { price: 'desc' }
};


function extractValuesAndPack(children) {
    return Array.from(children).map(child => child.value)
}


const SortBy = () => {
    return (
        <form className="SortBy">
            {HEB_SORT_BY}
            <SelectSort sortByOptions={sortByOptions} />
        </form>
    )
}

export default SortBy;