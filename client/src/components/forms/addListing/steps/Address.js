import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form';
import { validationConfig } from '../../utilities';
import withDivAndLabel from './../../withDivAndLabel';
import '#src#/styles/components/forms/add-listing/steps/Address.scss';
import { formHebrew, addressStepHebrew } from '../../heb';
import Select from '../../../ListContainer/SortBy/Select';
import { Address as addValues } from './validation';
import { defaultValue as defaultType } from './Type';
import WithErrorMessageContainer from './../../WithErrorMessageContainer';
const { HEB_TITLE, HEB_CHOOSE_PROPERTY_TYPE, HEB_CHOOSE_UPKEEP, HEB_TYPE_OF_PROPERTY, HEB_UPKEEP, HEB_MUNICIPALITY, HEB_STREET, HEB_NUMBER,
    HEB_ENTRANCE, HEB_FLOOR, HEB_TOTAL_BUILDING_FLOORS, HEB_TOTAL_PROPERTY_FLOORS, NEIGHBORHOOD } = addressStepHebrew;

const fieldNames = ["propertyType", "upkeep"];
const Address = () => {
    const { register, watch, setValue } = useFormContext();
    useEffect(() => {
        register({ name: fieldNames[0] }, validationConfig.required);
        register({ name: fieldNames[1] }, validationConfig.required);
    }, [register])

    const type = watch("type", defaultType);
    return (
        <div className="Address-container">
            <h5>{HEB_TITLE}</h5>
            {withDivAndLabel(<Select
                className="Address-select dropdown-container"
                bullet={false}
                name={fieldNames[0]}
                dispatch={(val) => { setValue(fieldNames[0], val) }}
                valEqualsText
                defOption={[HEB_CHOOSE_PROPERTY_TYPE]}
                dropOptions={addValues.propertyType[type]} />, HEB_CHOOSE_PROPERTY_TYPE, true)}
            {withDivAndLabel(<Select
                className="Address-select dropdown-container"
                bullet={false}
                name={fieldNames[1]}
                dispatch={(val) => { setValue(fieldNames[1], val) }}
                valEqualsText
                defOption={[HEB_CHOOSE_UPKEEP]}
                dropOptions={addValues.upkeep} />, HEB_CHOOSE_UPKEEP, true)}
        </div>
    )
}

export { Address, fieldNames };