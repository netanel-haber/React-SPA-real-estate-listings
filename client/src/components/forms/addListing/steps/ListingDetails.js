import React from 'react'
import { useFormContext } from 'react-hook-form';
import { listingDetailsStepHebrew } from '../../heb';
import { validationConfig } from '../../utilities';
import { WithDivsAndLabels } from '../../withDivAndLabel';
import NumberInput from '../../../NumberInput';
import '#src#/styles/components/forms/add-listing/steps/ListingDetails.scss';

const { HEB_ENTRY_DATE, HEB_IMMEDIATELY, HEB_PRICE,
    HEB_PRICE_PLACEHOLDER, HEB_SQ_M, HEB_SQ_M_PLACEHOLDER, HEB_TITLE } = listingDetailsStepHebrew;

const fieldNames = ["sqMeters", "price", "entryDate"];
const ListingDetails = () => {
    const { submitCount, errors, register } = useFormContext();
    return (
        <div className="ListingDetails">
            <h5>{HEB_TITLE}</h5>
            <div className="fields">
                <WithDivsAndLabels requiredIndices={[0]} texts={[HEB_SQ_M, HEB_PRICE, HEB_ENTRY_DATE]}>
                    <NumberInput placeholder={HEB_SQ_M_PLACEHOLDER} name={fieldNames[0]} ref={register(validationConfig.required)} />
                    <NumberInput placeholder={HEB_PRICE_PLACEHOLDER} name={fieldNames[1]} ref={register(validationConfig.price)} />
                </WithDivsAndLabels>
            </div>
        </div>
    )
}

export { ListingDetails, fieldNames };