import { getCities, getStreets } from '#src#/fetch/cities';
import '#src#/styles/components/forms/add-listing/steps/Address.scss';
import React, { useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import Select from '../../../ListContainer/SortBy/Select';
import { addressStepHebrew } from '../../heb';
import { validationConfig } from '../../utilities';
import SearchSelect from './../../../SearchSelect';
import withDivAndLabel from './../../withDivAndLabel';
import { defaultValue as defaultType } from './Type';
import { Address as addValues } from './validation';
import NumberInput from './../../../NumberInput';
const { HEB_TITLE, HEB_CHOOSE_PROPERTY_TYPE, HEB_CHOOSE_UPKEEP, HEB_TYPE_OF_PROPERTY, HEB_UPKEEP, HEB_MUNICIPALITY, HEB_STREET, HEB_NUMBER,
    HEB_ENTRANCE, HEB_SEARCH_STREET, HEB_SEARCH_CITY, HEB_FLOOR, HEB_TOTAL_PROPERTY_FLOORS, NEIGHBORHOOD } = addressStepHebrew;


const fieldNames = ["propertyType", "upkeep", "municipality", "street", "floor", "floorsInBuilding"];
const Address = () => {
    const { register, watch, setValue } = useFormContext();
    const cityOptions = useRef([]);
    const streetOptions = useRef([]);
    useEffect(() => {
        register({ name: fieldNames[0] }, validationConfig.required);
        register({ name: fieldNames[1] }, validationConfig.required);
        register({ name: fieldNames[2] }, validationConfig.required);
        register({ name: fieldNames[3] }, validationConfig.required);
        register({ name: fieldNames[4] }, validationConfig.required);
        register({ name: fieldNames[5] }, validationConfig.required);
    }, [register])
    const type = watch("type", defaultType);
    const municipality = watch(fieldNames[2], "");
    const street = watch(fieldNames[3], "");
    useEffect(() => {
        getCities().then((cities) => { cityOptions.current = cities })
    }, [])
    useEffect(() => {
        getStreets(municipality).then((streets = []) => { streetOptions.current = streets })
    }, [municipality])
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
                name={fieldNames[2]} dispatch={(val) => { setValue(fieldNames[2], val) }}
                placeholder={HEB_SEARCH_CITY}
                optionsRef={cityOptions}></SearchSelect>, HEB_MUNICIPALITY, true)}
            {withDivAndLabel(<SearchSelect
                disabled={municipality === ""}
                name={fieldNames[3]} dispatch={(val) => { setValue(fieldNames[3], val) }}
                placeholder={HEB_SEARCH_STREET}
                optionsRef={streetOptions}></SearchSelect>, HEB_STREET, true)}
            <div className="pure-control-group Address-floors">
                {withDivAndLabel(<NumberInput
                    disabled={street === ""}
                    max={50}
                    min={0}
                    name={fieldNames[4]} callback={(val) => { setValue(fieldNames[4], val) }}
                />, HEB_FLOOR, true)}
                {withDivAndLabel(<NumberInput
                    disabled={street === ""}
                    max={50}
                    min={1}
                    name={fieldNames[5]} callback={(val) => { setValue(fieldNames[5], val) }}
                />, HEB_TOTAL_PROPERTY_FLOORS, true)}
            </div>
        </div>
    )
}

export { Address, fieldNames };

