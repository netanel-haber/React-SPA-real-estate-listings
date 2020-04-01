import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form';
import { listingDetailsStepHebrew } from '../../heb';
import { validationConfig } from '../../utilities';
import { WithDivsAndLabels } from '../../withDivAndLabel';
import NumberInput from '../../../NumberInput';
import '#src#/styles/components/forms/add-listing/steps/ListingDetails.scss';
import DayPicker from './../../../DayPicker';


const { HEB_ENTRY_DATE, HEB_IMMEDIATELY, HEB_PRICE,
    HEB_PRICE_PLACEHOLDER, HEB_SQ_M, HEB_SQ_M_PLACEHOLDER, HEB_TITLE } = listingDetailsStepHebrew;

const fieldNames = ["sqMeters", "price", "entryDate"];
const ListingDetails = () => {
    const { submitCount, errors, register, control, setValue } = useFormContext();
    useEffect(() => {
        register({ name: fieldNames[2] }, validationConfig.date)
    }, [register])
    return (
        <div className="ListingDetails">
            <h5>{HEB_TITLE}</h5>
            <div className="fields">
                <WithDivsAndLabels requiredIndices={[0]} texts={[HEB_SQ_M, HEB_PRICE, HEB_ENTRY_DATE]}>
                    <NumberInput name={fieldNames[0]} placeholder={HEB_SQ_M_PLACEHOLDER} ref={register(validationConfig.required)} />
                    <NumberInput name={fieldNames[1]} placeholder={HEB_PRICE_PLACEHOLDER} ref={register(validationConfig.price)} />
                    <DayPicker name={fieldNames[2]} onDayChange={(val, modifiers, { state: { value } }) => {
                        setValue(fieldNames[2], value)
                    }} />
                </WithDivsAndLabels>
            </div>
        </div>
    )
}

export { ListingDetails, fieldNames };