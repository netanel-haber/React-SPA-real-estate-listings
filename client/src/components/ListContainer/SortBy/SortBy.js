import React, { useState, useContext } from 'react';
import '../../../styles/components/SortBy/SortBy.scss';
import SelectSort from './SelectSort';
import ItemListContext from '../../../contexts/ItemListContext';

import heb from './hebrew';
const { HEB_ONLY_WITH_PIC, HEB_ONLY_WITH_PRICE, HEB_FILTER, HEB_BY_DATE, HEB_SORT_BY, HEB_CHEAP_FIRST, HEB_EXPENSIVE_FIRST } = heb;


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

            {HEB_FILTER}
            <div className="SortBy__button">{HEB_ONLY_WITH_PRICE}</div>
            <div className="SortBy__button">{HEB_ONLY_WITH_PIC}</div>
        </form>
    )
}

export default SortBy;