import React from 'react'
import { useFormContext } from 'react-hook-form';
import { validationConfig } from '../../utilities';
import withDivAndLabel from './../../withDivAndLabel';
import '#src#/styles/components/forms/add-listing/steps/Address.scss';
import { formHebrew, addressStepHebrew } from '../../heb';
import Select from '../../../ListContainer/SortBy/Select';
const { email, password } = validationConfig;
const { HEB_EMAIL, HEB_PASSWORD } = formHebrew;
const { HEB_TITLE, HEB_TYPE_OF_PROPERTY, HEB_UPKEEP, HEB_MUNICIPALITY, HEB_STREET, HEB_NUMBER,
    HEB_ENTRANCE, HEB_FLOOR, HEB_TOTAL_BUILDING_FLOORS, HEB_TOTAL_PROPERTY_FLOORS, NEIGHBORHOOD } = addressStepHebrew;

const fieldNames = ["email"];
const Address = () => {
    const { submitCount, errors, register } = useFormContext();
    return (
        <div className="Address-container">
            <h5>{HEB_TITLE}</h5>
            <Select className="Address-select dropdown-container" bullet={false} dispatch={() => { }} dropOptions={[1, 2, 3]} />
        </div>
    )
}

export { Address, fieldNames };