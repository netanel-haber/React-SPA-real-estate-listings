import React from 'react';
import '../../../styles/components/SortBy/SortBy.scss';
import heb from './hebrew';
import SelectSort from './SelectSort';

const { HEB_BY_DATE, HEB_SORT_BY, HEB_CHEAP_FIRST, HEB_EXPENSIVE_FIRST } = heb;

const sortByOptions = {
    [HEB_BY_DATE]: { updatedAt: 'desc' },
    [HEB_CHEAP_FIRST]: { price: 'asc' },
    [HEB_EXPENSIVE_FIRST]: { price: 'desc' }
};

const SortBy = () => {
    return (
        <form className="SortBy">
            {HEB_SORT_BY}
            <SelectSort sortByOptions={sortByOptions} />

            {/* {HEB_FILTER}
            <div className="SortBy__button">{HEB_ONLY_WITH_PRICE}</div>
            <div className="SortBy__button">{HEB_ONLY_WITH_PIC}</div> */}
        </form>
    )
}

export default SortBy;