import React from 'react';
import { propertyDetailsStepHebrew } from './heb';

const { HEB_CHAR_LIMIT } = propertyDetailsStepHebrew;

function TextareaContainer({ name, title, placeholder, maxLength, charsWritten, register }) {
    return (
        <div className="inner-focus-in-form description">
            <h6>{title}</h6>
            <textarea ref={register} {...{ name, maxLength, placeholder }} />
            <div>{HEB_CHAR_LIMIT(maxLength - charsWritten)}</div>
        </div>
    )
}

export default TextareaContainer;