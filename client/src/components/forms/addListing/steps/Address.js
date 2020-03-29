import { getCities, getStreets } from '#src#/fetch/cities';
import '#src#/styles/components/forms/add-listing/steps/Address.scss';
import React, { useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormSelect } from '../../../ListContainer/SortBy/Select';
import { addressStepHebrew } from '../../heb';
import { validationConfig } from '../../utilities';
import NumberInput from './../../../NumberInput';
import SearchSelect from './../../../SearchSelect';
import { WithDivsAndLabels } from './../../withDivAndLabel';
import { defaultValue as defaultType } from './Type';
import { Address as addValues } from './validation';
const { HEB_TITLE, HEB_CHOOSE_PROPERTY_TYPE, HEB_CHOOSE_UPKEEP, HEB_TYPE_OF_PROPERTY, HEB_UPKEEP, HEB_MUNICIPALITY, HEB_STREET, HEB_NUMBER,
    HEB_ENTRANCE, HEB_SEARCH_STREET, HEB_SEARCH_CITY, HEB_FLOOR, HEB_TOTAL_PROPERTY_FLOORS, NEIGHBORHOOD } = addressStepHebrew;


const fieldNames = ["propertyType", "upkeep", "municipality", "street", "floor", "floorsInBuilding"];
const Address = () => {
    const { register, watch, setValue } = useFormContext();
    const cityOptions = useRef([]);
    const streetOptions = useRef([]);
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
            <div className="fields">
                <WithDivsAndLabels texts={[HEB_CHOOSE_PROPERTY_TYPE, HEB_CHOOSE_UPKEEP, HEB_MUNICIPALITY, HEB_STREET]}>
                    <FormSelect name={fieldNames[0]} ref={register(validationConfig.required)} className="Address-select" options={addValues.propertyType[type]} />
                    <FormSelect name={fieldNames[1]} ref={register(validationConfig.required)} className="Address-select" options={addValues.upkeep} />
                    <SearchSelect name={fieldNames[2]} placeholder={HEB_SEARCH_CITY} optionsRef={cityOptions}></SearchSelect>
                    <SearchSelect name={fieldNames[3]} disabled={municipality === ""} placeholder={HEB_SEARCH_STREET} optionsRef={streetOptions}></SearchSelect>
                </WithDivsAndLabels>
                <div className="pure-control-group Address-floors">
                    <WithDivsAndLabels texts={[HEB_FLOOR, HEB_TOTAL_PROPERTY_FLOORS]}>
                        <NumberInput ref={register(validationConfig.required)} disabled={street === ""} max={50} min={0} name={fieldNames[4]} callback={(val) => { setValue(fieldNames[4], val) }} />
                        <NumberInput ref={register(validationConfig.required)} disabled={street === ""} max={50} min={1} name={fieldNames[5]} callback={(val) => { setValue(fieldNames[5], val) }} />
                    </WithDivsAndLabels>
                </div>
            </div>
        </div>
    )
}

export { Address, fieldNames };

