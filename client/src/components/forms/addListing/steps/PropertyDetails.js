import '#src#/styles/components/forms/add-listing/steps/PropertyDetails.scss';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import translator2 from '../../../Item/rest/Level2_translator';
import translator3 from '../../../Item/rest/Level3_translator';
import { FormSelect } from '../../../ListContainer/SortBy/Select';
import NumberInput from '../../../NumberInput';
import { propertyDetailsStepHebrew } from '../../heb';
import { ThreewayToggleContainer } from '../../ThreewayToggle';
import { AddressValidation, booleanAttributes, validationConfig } from '../../utilities';
import { WithDivsAndLabels } from '../../withDivAndLabel';
import genSuccessiveArr from './../../../../utilities/generateArrOfSuccessiveNums';

const translation = (key) => {
    let { translation, picUrl } = translator3([key]);
    if (!translation)
        translation = translator2([key]).name;
    return { text: translation, picUrl }
}

const { HEB_NUM_BALCONIES_LABEL, HEB_NUM_PARKING_SPOTS, HEB_TITLE, HEB_CHOOSE_ATTRIBUTES,
    HEB_DISCLAIMER, HEB_RESET, HEB_TEXT_AREA_PLACEHOLDER, HEB_WHATS_IMPORTANT, HEB_CHAR_LIMIT, HEB_ROOMS } = propertyDetailsStepHebrew;
const maxDescChars = 200;

const fieldNames = ["numBalconies", "parkingSpots", "desc", "rooms", ...Object.values(booleanAttributes).flat()]
const PropertyDetails = () => {
    const { register, watch, setValue } = useFormContext();
    const type = watch("type");
    const desc = watch("desc");
    const propertyType = watch("propertyType", "");
    const boolAttributeNames = [...booleanAttributes.general, ...(booleanAttributes[type] || [])];
    const shouldShowRooms = AddressValidation.propertyTypesWithRooms.includes(propertyType);
    return (
        <div>
            <h5>{HEB_TITLE}</h5>
            <div className="fields">
                <div className="inner-focus-in-form form-inline">
                    <WithDivsAndLabels texts={[HEB_NUM_BALCONIES_LABEL, HEB_NUM_PARKING_SPOTS, HEB_ROOMS]} requiredIndices={[2]} className="NumberInput">
                        <NumberInput name={fieldNames[0]} min={0} max={2} ref={register} />
                        <NumberInput name={fieldNames[1]} min={0} max={9} ref={register} />
                        {shouldShowRooms &&
                            <FormSelect options={genSuccessiveArr(12, 0, 0.5).filter(el => !((el > 6) && !Number.isInteger(el)))}
                                name={fieldNames[3]} ref={register(validationConfig.required)} />}
                    </WithDivsAndLabels>
                </div>
                <div className="inner-focus-in-form PropertyDetails-bool-attr">
                    <h6>{HEB_CHOOSE_ATTRIBUTES}</h6>
                    <div className="disclaimer">{HEB_DISCLAIMER}</div>
                    <ThreewayToggleContainer toggleProps={boolAttributeNames.map(attr => ({ name: attr, ...translation(attr) }))} />
                    <button className="reset" type="button" onClick={() => { setValue(boolAttributeNames.map((attr) => ({ [attr]: undefined }))) }}>{HEB_RESET}</button>
                </div>
                <div className="inner-focus-in-form description">
                    <h6>{HEB_WHATS_IMPORTANT}</h6>
                    <textarea maxLength={maxDescChars} name={fieldNames[2]} placeholder={HEB_TEXT_AREA_PLACEHOLDER} ref={register} />
                    <div>{HEB_CHAR_LIMIT(maxDescChars - (desc?.length || 0))}</div>
                </div>
            </div>
        </div >
    )
}

export { PropertyDetails, fieldNames };

