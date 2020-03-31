import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form';
import NumberInput from '../../../NumberInput';
import { validationConfig, booleanAttributes, AddressValidation } from '../../utilities';
import { WithDivsAndLabels } from '../../withDivAndLabel';
import { propertyDetailsStepHebrew } from '../../heb';
import ThreewayToggle, { ThreewayToggleContainer } from '../../ThreewayToggle';
import translator3 from '../../../Item/rest/Level3_translator';
import translator2 from '../../../Item/rest/Level2_translator';
import '#src#/styles/components/forms/add-listing/steps/PropertyDetails.scss';


const translation = (key) => {
    let { translation, picUrl } = translator3([key]);
    if (!translation)
        translation = translator2([key]).name;
    return { text: translation, picUrl }
}

const { HEB_NUM_BALCONIES_LABEL, HEB_NUM_PARKING_SPOTS, HEB_TITLE, HEB_CHOOSE_ATTRIBUTES,
    HEB_DISCLAIMER, HEB_RESET, HEB_TEXT_AREA_PLACEHOLDER, HEB_WHATS_IMPORTANT, HEB_CHAR_LIMIT, HEB_ROOMS } = propertyDetailsStepHebrew;
const maxDescChars = 200;

const fieldNames = ["numBalconies", "parkingSpots", "desc", "rooms", ...Object.values(booleanAttributes).flat(),]
const PropertyDetails = () => {
    const { register, watch, setValue } = useFormContext();
    const type = watch("type");
    const desc = watch("desc");
    const propertyType = watch("propertyType", "");
    const boolAttributeNames = [...booleanAttributes.general, ...(booleanAttributes[type] || [])];
    return (
        <div>
            <h5>{HEB_TITLE}</h5>
            <div className="fields">
                <div className="inner-focus-in-form">
                    <div className="pure-control-group form-inline">
                        <WithDivsAndLabels texts={[HEB_NUM_BALCONIES_LABEL, HEB_NUM_PARKING_SPOTS, HEB_ROOMS]} requiredIndices={[2]}>
                            <NumberInput name={fieldNames[0]} min={0} max={2} ref={register} />
                            <NumberInput name={fieldNames[1]} min={0} max={9} ref={register} />
                            {AddressValidation.propertyTypesWithRooms.includes(propertyType) &&
                                <NumberInput name={fieldNames[3]} min={0} max={9} ref={register(validationConfig.required)} />}
                        </WithDivsAndLabels>
                    </div>
                </div>
                <div className="inner-focus-in-form PropertyDetails-bool-attr">
                    <h6>{HEB_CHOOSE_ATTRIBUTES}</h6>
                    <div className="disclaimer">{HEB_DISCLAIMER}</div>
                    <ThreewayToggleContainer toggleProps={boolAttributeNames.map(attr => ({ name: attr, ...translation(attr) }))} />
                    <button onClick={() => { setValue(boolAttributeNames.map((attr) => ({ [attr]: undefined }))) }}>{HEB_RESET}</button>
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

export { PropertyDetails, fieldNames }
