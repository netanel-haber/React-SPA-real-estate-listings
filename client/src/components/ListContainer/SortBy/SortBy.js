import React, { useState } from 'react';
import '../../../styles/components/SortBy/SortBy.scss';
import heb from './hebrew';
import SelectSort from './SelectSort';
import classnames from 'classnames';

const { HEB_BY_DATE, HEB_SORT_BY, HEB_CHEAP_FIRST, HEB_EXPENSIVE_FIRST, HEB_FILTER,
    HEB_ONLY_WITH_PRICE, HEB_ONLY_WITH_PIC } = heb;

const sortByOptions = {
    [HEB_BY_DATE]: { updatedAt: 'desc' },
    [HEB_CHEAP_FIRST]: { price: 'asc' },
    [HEB_EXPENSIVE_FIRST]: { price: 'desc' }
};

const SortBy = ({ dispatchSorts, dispatchFilters }) => {
    const [onlyWithPrice, togglePriceFilter] = useState(false);
    const [onlyWithPics, togglePicsFilter] = useState(false);

    const priceFilterButton = (<div
        onClick={() => {
            togglePriceFilter(!onlyWithPrice);
            dispatchFilters({ price: !onlyWithPrice && "$exists" })
        }}
        className={classnames("SortBy__button", onlyWithPrice && "active")}>{HEB_ONLY_WITH_PRICE}</div>);

    const picsFilterButton = (<div
        onClick={() => {
            togglePicsFilter(!onlyWithPics);
            dispatchFilters({ pictureKeys: !onlyWithPics && "$isntEmptyArray" })
        }}
        className={classnames("SortBy__button", onlyWithPics && "active")}>{HEB_ONLY_WITH_PIC}</div>);


    return (
        <form className="SortBy">
            {HEB_SORT_BY}
            <SelectSort {...{ dispatchSorts, sortByOptions }} />

            {HEB_FILTER}
            {priceFilterButton}
            {picsFilterButton}
        </form >
    )
}

export default SortBy;