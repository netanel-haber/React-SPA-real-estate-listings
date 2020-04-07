import "#src#/styles/components/forms/Filter/Filter.scss";
import React, { useContext, useEffect, useState, useReducer } from 'react';
import { FormContext, useForm } from 'react-hook-form';
import { BreakpointContext, ShowAt } from 'react-with-breakpoints';
import { FormSelect } from '../../ListContainer/SortBy/Select';
import { searchCities, searchStreets } from '#src#/fetch/cities';
import { AddressValidation, mockNeighborhoods } from '../utilities';
import { WithDivsAndLabels } from '../withDivAndLabel';
import SearchSelect from './../../SearchSelect';
import PriceRange from './PriceRange';
import searchOptionsReducer, {updateAction,updateTermAction} from './../../../reducers/searchOptionsReducer';
import submit from './submit';

const { HEB_FILTER = "פלטר", HEB_PRICE_RANGE = "טווח המחירים", HEB_PROPERTY_TYPE = "סוג הנכס",
    HEB_COLLAPSE = "צמצם", HEB_UNCOLLAPSE = "הראה פילטרים", HEB_SEARCH_PLACE = "חפשו אזור, עיר, שכונה או רחוב" } = {};


const lengthBreakPoint = 2;
const Filter = ({ dispatch, options, type }) => {
    const formMethods = useForm();
    const { handleSubmit, register, reset, watch } = formMethods;
    const term = watch("place", "");
    const [open, toggleOpen] = useState(true);
    const { currentBreakpoint } = useContext(BreakpointContext);
    const [{ options: searchOptions, term: termState }, dispatchSearch] = useReducer(searchOptionsReducer, { term, options: [] });
    useEffect(() => {
        (!open && (currentBreakpoint === "large" || currentBreakpoint === "xlarge")) && toggleOpen(true)
    }, [currentBreakpoint])
    useEffect(() => {
        reset()
        dispatch({ type: "RESET_FILTERS" })
    }, [type, dispatch])

    useEffect(() => {
        // if (term !== termState)
        //     dispatchSearch(updateTermAction(term));
        if (term.length > lengthBreakPoint) {
            searchStreets(term).then(res => {
                const streets = Object.entries(res).map(([city, streets]) => streets.map(street => `רח' ${street} (${city})`)).flat();
                dispatchSearch(updateAction(term, streets))
            })
            searchCities(term).then(cities => {
                dispatchSearch(updateAction(term, cities))
            })
            dispatchSearch(updateAction(term, mockNeighborhoods.filter(n => n.includes(term)).map(n => `${n} (שכונה)`)));
        }
    }, [term, termState])
    return (
        <div className="ListsContainer__component Filter">
            <FormContext {...formMethods} {...{ dispatch, options }}>
                <ShowAt breakpoint="mediumAndBelow">
                    <button onClick={() => toggleOpen(!open)} className="collapse-button" type="button">
                        {open ? HEB_COLLAPSE : HEB_UNCOLLAPSE}
                    </button>
                </ShowAt>
                {open && (
                    <form className="gen-form" onSubmit={handleSubmit((data) => submit(data, dispatch))}>
                        <div className="Filters__fields">
                            <WithDivsAndLabels texts={[HEB_PRICE_RANGE, HEB_SEARCH_PLACE, HEB_PROPERTY_TYPE]} requiredIndices={[]}>
                                <PriceRange names={["from", "to"]} />
                                <SearchSelect prefiltered={true} name={"place"} options={searchOptions} />
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