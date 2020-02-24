import React from 'react';
import '../../styles/components/SortBy/SelectSort.scss';
const { HEB_BY_DATE, HEB_SORT_BY: HEB_SORY_BY, HEB_CHEAP_FIRST, HEB_EXPENSIVE_FIRST } =
{
    HEB_SORT_BY: "מיין לפי",
    HEB_BY_DATE: "לפי תאריך",
    HEB_CHEAP_FIRST: "מחיר - מהזול ליקר",
    HEB_EXPENSIVE_FIRST: "מחיר - מהיקר לזול"
}


const SelectSort = ({ textsAndValues }) => {
    return (
        <div className="SelectSort">
            {HEB_SORY_BY}
            <select className="SortBy-select">
                <option value={JSON.stringify({ 'listing.updatedAt': 'descending' })} > {HEB_BY_DATE}</option>
                <option value={JSON.stringify({ price: 'ascending' })}>{HEB_CHEAP_FIRST}</option>
                <option value={JSON.stringify({ price: 'descending' })}>{HEB_EXPENSIVE_FIRST}</option>
            </select>
        </div>
    )
}

export default SelectSort;
