import { searchCities, searchStreets } from '#src#/fetch/cities';
import "#src#/styles/components/forms/Filter/Filter.scss";
import React, { useEffect, useState } from 'react';
import { FormContext, useForm } from 'react-hook-form';
import { FormSelect } from '../../ListContainer/SortBy/Select';
import { AddressValidation, mockNeighborhoods } from '../utilities';
import withDivAndLabel, { WithDivsAndLabels } from '../withDivAndLabel';
import SearchSelect from './../../SearchSelect';
import NumberInputRange from './NumberInputRange';
import SelectRange from './SelectRange';
import { possibleRoomValues } from '../utilities';
import submit from './submit';
import classnames from 'classnames';
import DayPicker from '../../DayPicker';

const { HEB_FILTER = "סנן", HEB_PRICE_RANGE = "טווח המחירים", HEB_PROPERTY_TYPE = "סוג הנכס", HEB_ROOM_RANGE = "טווח חדרים",
    HEB_COLLAPSE = "צמצם", HEB_ENTRY_DATE = "תאריך כניסה", HEB_SIZE = "גודל דירה (במ\"ר)", HEB_UNCOLLAPSE = "הראה פילטרים", HEB_SEARCH_PLACE = "חפשו אזור, עיר, שכונה או רחוב", HEB_ROOMMATES_RANGE = "טווח שותפים" } = {};


const lengthBreakPoint = 2;
const Filter = ({ dispatch, options, type }) => {
    const formMethods = useForm();
    const { handleSubmit, register, reset, watch, setValue } = formMethods;
    const term = watch("place", "");
    const propertyType = watch("type", "");
    const [open, toggleOpen] = useState(false);


    const [searchOptions, updateSearchOptions] = useState([[], [], []]);
    const [streets, cities, area] = searchOptions;
    const finalSearchOptions = [
        ...cities,
        ...area.filter(n => n.includes(term)).map(n => `${n} (שכונה)`),
        ...Object.entries(streets).map(([city, streets]) => streets.map(street => `${street} (רח', ${city})`)).flat()];


    useEffect(() => {
        register({ name: "entryDate" }, {})
    }, [register])
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
            <button onClick={() => toggleOpen(!open)} className="collapse-button" type="button">
                {open ? HEB_COLLAPSE : HEB_UNCOLLAPSE}
            </button>
            {open && (
                <form className="gen-form" onSubmit={handleSubmit((data) => submit(data, dispatch, searchOptions))}>
                    <FormContext {...formMethods} {...{ dispatch, options }}>
                        <div className="Filters__fields">
                            <WithDivsAndLabels texts={[HEB_PRICE_RANGE, HEB_SIZE, HEB_SEARCH_PLACE, HEB_ENTRY_DATE]} requiredIndices={[]}>
                                <NumberInputRange name="price" />
                                <NumberInputRange className="Filter__sqMeters" name="sqMeters" />
                                <SearchSelect name="place" className="Filter_Search" prefiltered={true} options={finalSearchOptions} />
                                <DayPicker
                                    name="entryDate"
                                    onDayChange={(val, m, { state: { value } }) => {
                                        setValue("entryDate", String(val) || value)
                                    }}/>
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