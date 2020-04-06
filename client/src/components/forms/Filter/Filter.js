import "#src#/styles/components/forms/Filter/Filter.scss";
import React, { useContext, useEffect, useState } from 'react';
import { FormContext, useForm } from 'react-hook-form';
import { BreakpointContext, ShowAt } from 'react-with-breakpoints';
import { FormSelect } from '../../ListContainer/SortBy/Select';
import { getCities, getStreets } from '#src#/fetch/cities';
import { AddressValidation, mockNeighborhoods } from '../utilities';
import { WithDivsAndLabels } from '../withDivAndLabel';
import SearchSelect from './../../SearchSelect';
import PriceRange from './PriceRange';


const submit = (data, dispatch) => {
    console.log(data);
    const { from, to, type } = data;
    from && dispatch({ type: "UPDATE_FILTER_VALUE", payload: ["price", "$gte", from] })
    to && dispatch({ type: "UPDATE_FILTER_VALUE", payload: ["price", "$lte", to] })
    type && dispatch({ type: "UPDATE_FILTER_VALUE", payload: ["type", "$eq", type] })
}

const { HEB_FILTER = "פלטר", HEB_PRICE_RANGE = "טווח המחירים", HEB_PROPERTY_TYPE = "סוג הנכס",
    HEB_COLLAPSE = "צמצם", HEB_UNCOLLAPSE = "הראה פילטרים", HEB_SEARCH_PLACE = "חפשו אזור, עיר, שכונה או רחוב" } = {};


const Filter = ({ dispatch, options, type }) => {
    const formMethods = useForm();
    const { handleSubmit, register, reset, watch } = formMethods;
    const searchPlace = watch("place");
    const [open, toggleOpen] = useState(true);
    const { currentBreakpoint } = useContext(BreakpointContext);
    const [searchOptions, updateOptions] = useState([]);
    useEffect(() => {
        (!open && currentBreakpoint === "large") && toggleOpen(true)
    }, [currentBreakpoint])
    useEffect(() => {
        reset()
        dispatch({ type: "RESET_FILTERS" })
    }, [type, dispatch])

    useEffect(() => {
        updateOptions(mockNeighborhoods);
        getCities().then(cities => { updateOptions([...searchOptions, ...cities]) });
        getStreets(undefined).then(streets => { updateOptions([...searchOptions, ...streets]) });
    }, [])
    return (
        <div className="ListsContainer__component Filter">
            <FormContext {...formMethods} {...{ dispatch, options }}>
                <ShowAt breakpoint="mediumAndBelow">
                    <button onClick={() => toggleOpen(!open)} className="collapse-button" type="button">
                        {open ? HEB_COLLAPSE : HEB_UNCOLLAPSE}
                    </button>
                </ShowAt>
                {open && (
                    <form onClick={(e) => e.target.tagName === "FORM" && toggleOpen(false)} className="gen-form" onSubmit={handleSubmit((data) => submit(data, dispatch))}>
                        <div className="Filters__fields">
                            <WithDivsAndLabels texts={[HEB_PRICE_RANGE, HEB_SEARCH_PLACE, HEB_PROPERTY_TYPE]} requiredIndices={[]}>
                                <PriceRange names={["from", "to"]} />
                                <SearchSelect name={"place"} options={searchOptions} />
                                {type && <FormSelect name="type" ref={register} options={AddressValidation.propertyType[type]} />}
                            </WithDivsAndLabels>
                        </div>
                        <div className="submit-container">
                            <button className="pure-button pure-button-primary" type="submit" ref={register}>{HEB_FILTER}</button>
                        </div>
                    </form>
                )}
            </FormContext>
        </div >
    )
}

export default Filter;