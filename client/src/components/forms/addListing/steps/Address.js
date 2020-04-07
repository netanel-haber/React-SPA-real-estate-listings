import { getCities, getStreets } from '#src#/fetch/cities';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormSelect } from '../../../ListContainer/SortBy/Select';
import { addressStepHebrew } from '../../heb';
import { mockNeighborhoods, validationConfig as vc, AddressValidation } from '../../utilities';
import NumberInput from './../../../NumberInput';
import SearchSelect from './../../../SearchSelect';
import { WithDivsAndLabels } from './../../withDivAndLabel';
import { defaultValue as defaultType } from './Type';
const { HEB_TITLE, HEB_CHOOSE_PROPERTY_TYPE, HEB_CHOOSE_UPKEEP, HEB_TYPE_OF_PROPERTY, HEB_UPKEEP, HEB_MUNICIPALITY, HEB_STREET, HEB_NUMBER,
    HEB_ENTRANCE, HEB_SEARCH_STREET, HEB_SEARCH_CITY, HEB_APT, HEB_FLOOR, HEB_TOTAL_PROPERTY_FLOORS, HEB_NEIGHBORHOOD_LABEL, HEB_NEIGHBORHOOD_PLACEHOLDER } = addressStepHebrew;


const fieldNames = [
    "propertyType", "upkeep", "municipality", "street", "floor",
    "floorsInBuilding", "area", "number", "apt", "entrance"
];
const Address = () => {
    const { register, watch, setValue } = useFormContext();
    const [municipalities, updateMunicipalities] = useState([]);
    const [streets, updateStreets] = useState([]);
    const type = watch("type", defaultType);
    const municipality = watch(fieldNames[2]);
    useEffect(() => { getCities().then(updateMunicipalities) }, [])
    useEffect(() => {
        if (municipalities.includes(municipality)) {
            var count = 0;
            const spinner = setInterval(() => { setValue(fieldNames[3], new Array((++count % 6) + 2).join('⚬')) }, 100);
            getStreets(municipality).then((streets = []) => {
                updateStreets(streets)
                clearInterval(spinner);
                setValue(fieldNames[3], "")
            })
        }
        else if (streets.length > 0) updateStreets([]);
    }, [municipality])
    return (
        <div className="Address-container">
            <h5>{HEB_TITLE}</h5>
            <div className="fields">
                <WithDivsAndLabels requiredIndices={[0, 2, 3]} texts={[HEB_CHOOSE_PROPERTY_TYPE, HEB_CHOOSE_UPKEEP, HEB_MUNICIPALITY, HEB_STREET]}>
                    <FormSelect name={fieldNames[0]} ref={register(vc.required)} className="Address-select" options={AddressValidation.propertyType[type]} />
                    <FormSelect name={fieldNames[1]} ref={register} className="Address-select" options={AddressValidation.upkeep} />
                    <SearchSelect name={fieldNames[2]} validationConfig={vc.municipality(municipalities)} placeholder={HEB_SEARCH_CITY} options={municipalities} />
                    <SearchSelect name={fieldNames[3]} validationConfig={vc.streets(streets)} disabled={streets.length === 0}  callback={(city) => { setValue(fieldNames[6], mockNeighborhoods[Math.ceil(Math.random() * (mockNeighborhoods.length - 1))]) }} placeholder={HEB_SEARCH_STREET} options={streets} />
                </WithDivsAndLabels>
                <div className="pure-control-group form-inline">
                    <WithDivsAndLabels texts={[HEB_NUMBER, HEB_APT, HEB_FLOOR, HEB_TOTAL_PROPERTY_FLOORS]} requiredIndices={[0]} className="NumberInput">
                        <NumberInput name={fieldNames[7]} min={1} max={50} />
                        <NumberInput name={fieldNames[8]} min={1} max={50} />
                        <NumberInput name={fieldNames[4]} max={50} />
                        <NumberInput name={fieldNames[5]} min={1} max={50} />
                    </WithDivsAndLabels>
                </div>
                <WithDivsAndLabels texts={[HEB_ENTRANCE, HEB_NEIGHBORHOOD_LABEL]} requiredIndices={[]}>
                    <input name={fieldNames[9]} ref={register} />
                    <input name={fieldNames[6]} ref={register} readOnly placeholder={HEB_NEIGHBORHOOD_PLACEHOLDER} />
                </WithDivsAndLabels>
            </div>
        </div>
    )
}

export { Address, fieldNames };

