import { getCities } from '#src#/fetch/json';
import '#src#/styles/components/forms/add-listing/steps/Address.scss';
import React, { useEffect, useState, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import Select from '../../../ListContainer/SortBy/Select';
import { addressStepHebrew } from '../../heb';
import { validationConfig } from '../../utilities';
import withDivAndLabel from './../../withDivAndLabel';
import { defaultValue as defaultType } from './Type';
import { Address as addValues } from './validation';
import SearchSelect from './../../../SearchSelect';
const { HEB_TITLE, HEB_CHOOSE_PROPERTY_TYPE, HEB_CHOOSE_UPKEEP, HEB_TYPE_OF_PROPERTY, HEB_UPKEEP, HEB_MUNICIPALITY, HEB_STREET, HEB_NUMBER,
    HEB_ENTRANCE, HEB_SEARCH_CITY, HEB_FLOOR, HEB_TOTAL_BUILDING_FLOORS, HEB_TOTAL_PROPERTY_FLOORS, NEIGHBORHOOD } = addressStepHebrew;


const fieldNames = ["propertyType", "upkeep", "municipality"];
const Address = () => {
    const { register, watch, setValue } = useFormContext();
    const cityOptions = useRef([]);
    useEffect(() => {
        register({ name: fieldNames[0] }, validationConfig.required);
        register({ name: fieldNames[1] }, validationConfig.required);
        register({ name: fieldNames[2] }, validationConfig.required);
    }, [register])
    useEffect(() => { getCities().then((cities) => { cityOptions.current = cities }) }, [])
    const type = watch("type", defaultType);
    return (
        <div className="Address-container">
            <h5>{HEB_TITLE}</h5>
            {withDivAndLabel(<Select
                className="Address-select" name={fieldNames[0]} dispatch={(val) => { setValue(fieldNames[0], val) }}
                bullet={false}
                valEqualsText
                defOption={[HEB_CHOOSE_PROPERTY_TYPE]}
                dropOptions={addValues.propertyType[type]} />, HEB_CHOOSE_PROPERTY_TYPE, true)}
            {withDivAndLabel(<Select
                className="Address-select" name={fieldNames[1]} dispatch={(val) => { setValue(fieldNames[1], val) }}
                bullet={false}
                valEqualsText
                defOption={[HEB_CHOOSE_UPKEEP]}
                dropOptions={addValues.upkeep} />, HEB_CHOOSE_UPKEEP, true)}
            {withDivAndLabel(<SearchSelect
                className="Address-city" name={fieldNames[2]} dispatch={(val) => { setValue(fieldNames[2], val) }}
                placeholder={HEB_SEARCH_CITY}
                optionsRef={cityOptions}></SearchSelect>, HEB_MUNICIPALITY, true)}
        </div>
    )
}

export { Address, fieldNames };
