import { searchCities, searchStreets } from '#src#/fetch/cities';
import "#src#/styles/components/forms/Filter/Filter.scss";
import React, { useContext, useEffect, useState } from 'react';
import { FormContext, useForm } from 'react-hook-form';
import { BreakpointContext, ShowAt } from 'react-with-breakpoints';
import { FormSelect } from '../../ListContainer/SortBy/Select';
import { AddressValidation, mockNeighborhoods } from '../utilities';
import withDivAndLabel, { WithDivsAndLabels } from '../withDivAndLabel';
import SearchSelect from './../../SearchSelect';
import NumberInputRange from './NumberInputRange';
import SelectRange from './SelectRange';
import { possibleRoomValues } from '../utilities';
import submit from './submit';

const { HEB_FILTER = "סנן", HEB_PRICE_RANGE = "טווח המחירים", HEB_PROPERTY_TYPE = "סוג הנכס", HEB_ROOM_RANGE = "טווח חדרים",
    HEB_COLLAPSE = "צמצם", HEB_UNCOLLAPSE = "הראה פילטרים", HEB_SEARCH_PLACE = "חפשו אזור, עיר, שכונה או רחוב", HEB_ROOMMATES_RANGE = "טווח שותפים" } = {};


const lengthBreakPoint = 2;
const Filter = ({ dispatch, options, type }) => {
    const formMethods = useForm();
    const { handleSubmit, register, reset, watch } = formMethods;
    const term = watch("place", "");
    const propertyType = watch("type", "");
    const [open, toggleOpen] = useState(true);


    const [searchOptions, updateSearchOptions] = useState([[], [], []]);
    const [streets, cities, area] = searchOptions;
    const finalSearchOptions = [
        ...cities,
        ...area.filter(n => n.includes(term)).map(n => `${n} (שכונה)`),
        ...Object.entries(streets).map(([city, streets]) => streets.map(street => `${street} (רח', ${city})`)).flat()];

    const { currentBreakpoint } = useContext(BreakpointContext);



    useEffect(() => {
        (!open && (currentBreakpoint === "large" || currentBreakpoint === "xlarge")) && toggleOpen(true)
    }, [currentBreakpoint])
    useEffect(() => {
        reset()
        dispatch({ type: "RESET_FILTERS" })
    }, [type, dispatch])
    useEffect(() => {
        if (term.length > lengthBreakPoint)
            Promise.all([searchStreets(term), searchCities(term), mockNeighborhoods]).then(updateSearchOptions);
        else if (streets.length || cities.length || area.length)
            updateSearchOptions([[], [], []])
    }, [term])


    return (
        <div className="ListsContainer__component Filter">
            <ShowAt breakpoint="mediumAndBelow">
                <button onClick={() => toggleOpen(!open)} className="collapse-button" type="button">
                    {open ? HEB_COLLAPSE : HEB_UNCOLLAPSE}
                </button>
            </ShowAt>
            {open && (
                <form className="gen-form" onSubmit={handleSubmit((data) => submit(data, dispatch, searchOptions))}>
                    <FormContext {...formMethods} {...{ dispatch, options }}>
                        <div className="Filters__fields">
                            <WithDivsAndLabels texts={[HEB_PRICE_RANGE, HEB_SEARCH_PLACE]} requiredIndices={[]}>
                                <NumberInputRange name="price" />
                                <SearchSelect prefiltered={true} name="place" options={finalSearchOptions} />
                            </WithDivsAndLabels>
                            {type && withDivAndLabel(
                                <FormSelect name="type" ref={register} options={AddressValidation.propertyType[type]} />, HEB_PROPERTY_TYPE)}
                            {AddressValidation.propertyTypesWithRooms.includes(propertyType) && withDivAndLabel(
                                <SelectRange name="rooms" options={possibleRoomValues} />, HEB_ROOM_RANGE)}
                            {type === "roommates" && withDivAndLabel(
                                <SelectRange name="roommates" options={[2, 3, 4, 5]} />, HEB_ROOMMATES_RANGE)}
                        </div>
                    </FormContext>
                    <div className="submit-container">
                        <button className="pure-button pure-button-primary" type="submit">{HEB_FILTER}</button>
                    </div>
                </form>
            )}
        </div >
    )
}

export default Filter;