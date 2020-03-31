import { getCities, getStreets } from '#src#/fetch/cities';
import '#src#/styles/components/forms/add-listing/steps/Address.scss';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormSelect } from '../../../ListContainer/SortBy/Select';
import { addressStepHebrew } from '../../heb';
import { mockNeighborhoods, validationConfig, AddressValidation } from '../../utilities';
import NumberInput from './../../../NumberInput';
import SearchSelect from './../../../SearchSelect';
import withDivAndLabel, { WithDivsAndLabels } from './../../withDivAndLabel';
import { defaultValue as defaultType } from './Type';
const { HEB_TITLE, HEB_CHOOSE_PROPERTY_TYPE, HEB_CHOOSE_UPKEEP, HEB_TYPE_OF_PROPERTY, HEB_UPKEEP, HEB_MUNICIPALITY, HEB_STREET, HEB_NUMBER,
    HEB_ENTRANCE, HEB_SEARCH_STREET, HEB_SEARCH_CITY, HEB_APT, HEB_FLOOR, HEB_TOTAL_PROPERTY_FLOORS, HEB_NEIGHBORHOOD_LABEL, HEB_NEIGHBORHOOD_PLACEHOLDER } = addressStepHebrew;


const fieldNames = [
    "propertyType", "upkeep", "municipality", "street", "floor",
    "floorsInBuilding", "neighborhood", "number", "apt", "entrance"
];
const Address = () => {
    const { register, watch, setValue } = useFormContext();
    const [municipalities, updateMunicipalities] = useState([]);
    const [streets, updateStreets] = useState([]);
    const type = watch("type", defaultType);
    const municipality = watch(fieldNames[2]);
    const street = watch(fieldNames[3]);
    useEffect(() => { getCities().then(updateMunicipalities) }, [])
    useEffect(() => {
        if (municipalities.includes(municipality))
            getStreets(municipality).then((streets = []) => { updateStreets(streets) })
        else if (streets.length > 0) {
            updateStreets([]);
        }
    },
        [municipality])
    return (
        <div className="Address-container">
            <h5>{HEB_TITLE}</h5>
            <div className="fields">
                <WithDivsAndLabels requiredIndices={[0, 2, 3]} texts={[HEB_CHOOSE_PROPERTY_TYPE, HEB_CHOOSE_UPKEEP, HEB_MUNICIPALITY, HEB_STREET]}>
                    <FormSelect name={fieldNames[0]} ref={register(validationConfig.required)} className="Address-select" options={AddressValidation.propertyType[type]} />
                    <FormSelect name={fieldNames[1]} ref={register} className="Address-select" options={AddressValidation.upkeep} />
                    <SearchSelect name={fieldNames[2]} validationFunc={validationConfig.municipality(municipalities)} placeholder={HEB_SEARCH_CITY} options={municipalities} />
                    <SearchSelect name={fieldNames[3]} disabled={streets.length === 0} validationFunc={validationConfig.streets(streets)} callback={(city) => { setValue(fieldNames[6], mockNeighborhoods[Math.ceil(Math.random() * (mockNeighborhoods.length - 1))]) }} placeholder={HEB_SEARCH_STREET} options={streets} />
                </WithDivsAndLabels>
                <div className="pure-control-group form-inline">
                    <WithDivsAndLabels texts={[HEB_NUMBER, HEB_APT]} requiredIndices={[0]}>
                        <NumberInput name={fieldNames[7]} ref={register(validationConfig.required)} max={50} min={0} />
                        <NumberInput name={fieldNames[8]} ref={register} max={50} min={0} />
                    </WithDivsAndLabels>
                </div>
                {withDivAndLabel(<input name={fieldNames[9]} ref={register} />, HEB_ENTRANCE)}
                <div className="pure-control-group form-inline">
                    <WithDivsAndLabels texts={[HEB_FLOOR, HEB_TOTAL_PROPERTY_FLOORS]} requiredIndices={[]}>
                        <NumberInput name={fieldNames[4]} ref={register} max={50} min={0} />
                        <NumberInput name={fieldNames[5]} ref={register} max={50} min={1} />
                    </WithDivsAndLabels>
                </div>
                {withDivAndLabel(<input name={fieldNames[6]} ref={register} readOnly placeholder={HEB_NEIGHBORHOOD_PLACEHOLDER} />, HEB_NEIGHBORHOOD_LABEL)}
            </div>
        </div>
    )
}

export { Address, fieldNames };

