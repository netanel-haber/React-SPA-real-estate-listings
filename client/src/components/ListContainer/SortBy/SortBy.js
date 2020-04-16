import classnames from 'classnames';
import React from 'react';
import '../../../styles/components/SortBy/SortBy.scss';
import NumberInput from './../../NumberInput';
import heb from './hebrew';
import Select from './Select';
import equal from 'fast-deep-equal';
import filterShortCuts from '../../../utilities/dbFilterShortcuts';
import { useForm, FormContext } from 'react-hook-form';
import withDivAndLabel, { WithDivsAndLabels } from './../../forms/withDivAndLabel';

const { $exists, $isntEmptyArray } = filterShortCuts;

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
    const { sorts, filters } = options;
    const formMethods = useForm({ mode: "onChange" });
    const { register, handleSubmit } = formMethods;

    const sortOptions = Object.entries(sortByOptions);
    return (
        <FormContext {...formMethods}>
            <form onSubmit={handleSubmit(({ limit }) =>
                (limit && !isNaN(Number(limit))) && dispatch({ type: "LIMIT", payload: Number(limit) }))}>
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
                            <div
                                onClick={() => dispatchToggle(dispatch, ["price", $exists])}
                                className={classnames("SortBy__button", { active: filters?.price?.["$exists"] })}>
                                {HEB_ONLY_WITH_PRICE}
                            </div>
                            <div
                                onClick={() => dispatchToggle(dispatch, ["pictureKeys", $isntEmptyArray])}
                                className={classnames("SortBy__button", { active: filters?.pictureKeys?.["$exists"] })}>
                                {HEB_ONLY_WITH_PIC}
                            </div>
                        </div>
                        {withDivAndLabel(<NumberInput name="limit" min={1} max={15} className={"SortBy__limit"} />, HEB_LIMIT)}
                    </div >
                </div>
            </form>
        </FormContext>
    )
}

export default SortBy;