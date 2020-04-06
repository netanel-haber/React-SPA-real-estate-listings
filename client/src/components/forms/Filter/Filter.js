import React, { useContext, useState, useEffect } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import "#src#/styles/components/forms/Filter/Filter.scss";
import PriceRange from './PriceRange';
import withDivAndLabel, { WithDivsAndLabels } from '../withDivAndLabel';
import { FormSelect } from '../../ListContainer/SortBy/Select';
import { AddressValidation } from '../utilities';
import { ShowAt, BreakpointContext } from 'react-with-breakpoints';

const submit = (data, dispatch) => {
    console.log(data);
    const { from, to, type } = data;
    from && dispatch({ type: "UPDATE_FILTER_VALUE", payload: ["price", "$gte", from] })
    to && dispatch({ type: "UPDATE_FILTER_VALUE", payload: ["price", "$lte", to] })
    type && dispatch({type:"", payload:[]})
}

const { HEB_FILTER = "פלטר", HEB_PRICE_RANGE = "טווח המחירים", HEB_PROPERTY_TYPE = "סוג הנכס", HEB_SHOW_FILTERS = "הראה פילטרים",
    HEB_COLLAPSE = "צמצם", HEB_UNCOLLAPSE = "הראה פילטרים" } = {};


const Filter = ({ dispatch, options, type }) => {
    const formMethods = useForm();
    const { handleSubmit, register } = formMethods;
    const [open, toggleOpen] = useState(true);
    const { currentBreakpoint } = useContext(BreakpointContext);
    useEffect(() => {
        (!open && currentBreakpoint === "large") && toggleOpen(true)
    }, [currentBreakpoint])
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
                            <WithDivsAndLabels texts={[HEB_PRICE_RANGE, HEB_PROPERTY_TYPE]} requiredIndices={[]}>
                                <PriceRange names={["from", "to"]} />
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