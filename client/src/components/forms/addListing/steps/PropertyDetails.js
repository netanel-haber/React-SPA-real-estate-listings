import '#src#/styles/components/forms/add-listing/steps/PropertyDetails.scss';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormSelect } from '../../../ListContainer/SortBy/Select';
import NumberInput from '../../../NumberInput';
import { propertyDetailsStepHebrew } from '../../heb';
import TextareaContainer from '../../TextareaContainer';
import { ThreewayToggleContainer } from '../../ThreewayToggle';
import { AddressValidation, booleanAttributes, watchMultipleFields, possibleRoomValues, validationConfig, translation } from '../../utilities';
import { WithDivsAndLabels } from '../../withDivAndLabel';


const { HEB_FURNITURE_DESCRIPTION, HEB_FURNITURE_DESCRIPTION_PLACEHOLDER, HEB_NUM_BALCONIES_LABEL, HEB_NUM_PARKING_SPOTS, HEB_TITLE, HEB_CHOOSE_ATTRIBUTES,
    HEB_DISCLAIMER, HEB_RESET, HEB_TEXT_AREA_PLACEHOLDER, HEB_WHATS_IMPORTANT, HEB_CHAR_LIMIT, HEB_ROOMS } = propertyDetailsStepHebrew;
const maxDescChars = 200;
const maxFurnitureDescChars = 100;


const fieldNames = ["numBalconies", "parkingSpots", "desc", "rooms", "furnitureDesc", ...Object.values(booleanAttributes).flat()]
const PropertyDetails = () => {
    const { register, watch, setValue } = useFormContext();
    const { type, desc, propertyType, furniture, furnitureDesc } =
        watchMultipleFields(watch, ["type", "desc", "propertyType", "furniture", "furnitureDesc"]);
    const boolAttributeNames = [...booleanAttributes.general, ...(booleanAttributes[type] || [])];
    const shouldShowRooms = AddressValidation.propertyTypesWithRooms.includes(propertyType || "");
    return (
        <div>
            <h5>{HEB_TITLE}</h5>
            <div className="fields">
                <div className="inner-focus-in-form form-inline">
                    <WithDivsAndLabels texts={[HEB_NUM_BALCONIES_LABEL, HEB_NUM_PARKING_SPOTS, HEB_ROOMS]} requiredIndices={[2]} className="NumberInput">
                        <NumberInput name={fieldNames[0]} max={2} />
                        <NumberInput name={fieldNames[1]} max={9} />
                        {shouldShowRooms &&
                            <FormSelect name={fieldNames[3]} options={possibleRoomValues} ref={register(validationConfig.required)} />}
                    </WithDivsAndLabels>
                </div>
                <div className="inner-focus-in-form PropertyDetails-bool-attr">
                    <h6>{HEB_CHOOSE_ATTRIBUTES}</h6>
                    <div className="disclaimer">{HEB_DISCLAIMER}</div>
                    <ThreewayToggleContainer toggleProps={boolAttributeNames.map(attr => ({ name: attr, ...translation(attr) }))} />
                    <button className="reset" type="button" onClick={() => { setValue(boolAttributeNames.map((attr) => ({ [attr]: undefined }))) }}>{HEB_RESET}</button>
                </div>
                {furniture &&
                    <TextareaContainer name={fieldNames[4]} title={HEB_FURNITURE_DESCRIPTION} charsWritten={furnitureDesc?.length || 0} maxLength={maxFurnitureDescChars} placeholder={HEB_FURNITURE_DESCRIPTION_PLACEHOLDER} register={register} />}
                <TextareaContainer name={fieldNames[2]} title={HEB_WHATS_IMPORTANT} maxLength={maxDescChars} placeholder={HEB_TEXT_AREA_PLACEHOLDER} register={register} charsWritten={desc?.length || 0} />
            </div>
        </div >
    )
}


export { PropertyDetails, fieldNames };

