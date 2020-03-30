import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form';
import NumberInput from '../../../NumberInput';
import { validationConfig, booleanAttributes } from '../../utilities';
import { WithDivsAndLabels } from '../../withDivAndLabel';
import { propertyDetailsStepHebrew } from '../../heb';
import ThreewayToggle from '../../ThreewayToggle';
import translator3 from '../../../Item/rest/Level3_translator';
import translator2 from '../../../Item/rest/Level2_translator';
import '#src#/styles/components/forms/add-listing/steps/PropertyDetails.scss';

const translation = (key) => {
    let { translation, picUrl } = translator3([key]);
    if (!translation)
        translation = translator2([key]).name;
    return { text: translation, picUrl }
}

const { HEB_NUM_BALCONIES_LABEL, HEB_NUM_PARKING_SPOTS, HEB_TITLE } = propertyDetailsStepHebrew;

const fields = ["numBalconies", "parkingSpots", ...Object.values(booleanAttributes).flat()]
const PropertyDetails = () => {
    const { register, watch } = useFormContext();
    const type = watch("type");
    return (
        <div>
            <h5>{HEB_TITLE}</h5>
            <div className="fields">
                <WithDivsAndLabels texts={[HEB_NUM_BALCONIES_LABEL, HEB_NUM_PARKING_SPOTS]} requiredIndices={[]}>
                    <NumberInput name={fields[0]} min={0} max={2} ref={register} />
                    <NumberInput name={fields[1]} min={0} max={9} ref={register} />
                </WithDivsAndLabels>
                <div className="PropertyDetails-bool-attr">
                    {[...booleanAttributes.general, ...(booleanAttributes[type] || [])].map((attr, index) => (
                        <ThreewayToggle key={index} name={attr} {...translation(attr)} ></ThreewayToggle>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default PropertyDetails;