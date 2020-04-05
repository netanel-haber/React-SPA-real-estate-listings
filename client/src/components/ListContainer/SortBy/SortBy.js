import classnames from 'classnames';
import React from 'react';
import '../../../styles/components/SortBy/SortBy.scss';
import NumberInput from './../../NumberInput';
import heb from './hebrew';
import Select from './Select';
import equal from 'fast-deep-equal';

const { HEB_BY_DATE, HEB_SORT_BY, HEB_CHEAP_FIRST, HEB_EXPENSIVE_FIRST, HEB_FILTER,
    HEB_ONLY_WITH_PRICE, HEB_ONLY_WITH_PIC } = heb;
const { HEB_LIMIT } = {
    HEB_LIMIT: "מספר הנכסים בכל עמוד:"
}

const sortByOptions = {
    [HEB_BY_DATE]: { updatedAt: -1 },
    [HEB_CHEAP_FIRST]: { price: 1 },
    [HEB_EXPENSIVE_FIRST]: { price: -1 }
};

function dispatchToggle(dispatch, payload) {
    dispatch({ type: "TOGGLE_FILTER", payload })
}



const SortBy = ({ options, dispatch }) => {
    const { sorts, filters, limit } = options;

    const priceFilterButton = (
        <div
            onClick={() => dispatchToggle(dispatch, ["price", "$exists"])}
            className={classnames("SortBy__button", { active: filters?.price?.includes("$exists") })}>
            {HEB_ONLY_WITH_PRICE}
        </div>);

    const picsFilterButton = (
        <div
            onClick={() => dispatchToggle(dispatch, ["pictureKeys", "$exists"])}
            className={classnames("SortBy__button", { active: filters?.pictureKeys?.includes("$exists") })}>
            {HEB_ONLY_WITH_PIC}
        </div>);

    const sortOptions = Object.entries(sortByOptions);
    return (
        <div className="ListsContainer__component">
            <div className="SortBy">
                <div>
                    <div>{HEB_SORT_BY}</div>
                    <Select
                        dispatch={(val) => dispatch({ type: "SORTS", payload: val })}
                        options={sortOptions}
                        selectedOption={sortOptions.find(([, opt]) => equal(opt, sorts))}
                    />
                </div>
                <div>
                    <div>{HEB_FILTER}</div>
                    {priceFilterButton}
                    {picsFilterButton}
                </div>
                <div>
                    <div>{HEB_LIMIT}</div>
                    <NumberInput value={limit} min={1} max={15} className={"SortBy__limit"}
                        callback={(val) => dispatch({ type: "LIMIT", payload: val })} />
                </div>
            </div >
        </div>
    )
}

export default SortBy;