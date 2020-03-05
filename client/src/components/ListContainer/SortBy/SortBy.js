import classnames from 'classnames';
import React, { useState } from 'react';
import '../../../styles/components/SortBy/SortBy.scss';
import NumberInput from './../../NumberInput';
import heb from './hebrew';
import SelectSort from './SelectSort';

const { HEB_BY_DATE, HEB_SORT_BY, HEB_CHEAP_FIRST, HEB_EXPENSIVE_FIRST, HEB_FILTER,
    HEB_ONLY_WITH_PRICE, HEB_ONLY_WITH_PIC } = heb;
const { HEB_LIMIT } = {
    HEB_LIMIT: "מספר הנכסים בכל עמוד:"
}

const sortByOptions = {
    [HEB_BY_DATE]: { updatedAt: 'desc' },
    [HEB_CHEAP_FIRST]: { price: 'asc' },
    [HEB_EXPENSIVE_FIRST]: { price: 'desc' }
};



const SortBy = ({ dispatchSorts, dispatchFilters, dispatchLimit }) => {
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
        <div className="SortBy">
            <div>
                <div>{HEB_SORT_BY}</div>
                <SelectSort {...{ dispatchSorts, sortByOptions }} />
            </div>
            <div>
                <div>{HEB_FILTER}</div>
                {priceFilterButton}
                {picsFilterButton}
            </div>
            <div>
                <div>{HEB_LIMIT}</div>
                <NumberInput min={1} max={15} className={"SortBy__limit"} callback={dispatchLimit} />
            </div>
        </div >
    )
}

export default SortBy;