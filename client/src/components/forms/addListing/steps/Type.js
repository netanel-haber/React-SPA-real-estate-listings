import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import '#src#/styles/components/forms/add-listing/steps/Type.scss';
import RadioLabelWithDiv from '../RadioLabelWithDiv';
import { typeStepHebrew } from '../../heb';

const { HEB_FORSALE, HEB_RENT, HEB_ROOMMATES, HEB_COMMERCIAL, HEB_CHOOSE } = typeStepHebrew;
const fieldNames = ["type"];
const ids = ["t1", "t2", "t3", "t4"];
const values = ["forsale", "rent", "commercial", "roommates"];
const defaultValue = "forsale";
const texts = [HEB_FORSALE, HEB_RENT, HEB_COMMERCIAL, HEB_ROOMMATES];

const Type = () => {
    const { register, reset } = useFormContext();
    const [selectedTypeIndex, updateSelected] = useState(values.findIndex(val => val === defaultValue));
    return (
        <div className="Type__container">
            <h5>{HEB_CHOOSE}</h5>
            {/* invisible radios */}
            {ids.map((id, index) => (
                <input
                    style={{ display: "none" }} checked={selectedTypeIndex === index}
                    onChange={() => { reset(); updateSelected(index); }} key={index}
                    ref={register({ required: true })} type="radio"
                    name={fieldNames[0]} id={id}
                    value={values[index]} />
            ))}
            {/* visible labels */}
            <div className="Type__container-radio-group">
                {texts.map((text, index) => (
                    <RadioLabelWithDiv
                        active={selectedTypeIndex === index} key={index}
                        text={text} htmlFor={ids[index]}
                    />
                ))}
            </div>
        </div>
    )
}

export { Type, fieldNames, defaultValue };
