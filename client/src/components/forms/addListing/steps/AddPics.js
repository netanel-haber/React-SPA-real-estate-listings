import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form';
import { addPicsStepHebrew, errHebrew } from '../../heb';
import { validationConfig } from '../../utilities';
import '#src#/styles/components/forms/add-listing/steps/AddPics.scss';
import withDivAndLabel from './../../withDivAndLabel';
import WithErrorMessageContainer from './../../WithErrorMessageContainer';

const { HEB_TITLE, HEB_CHOOSE_PICS, HEB_CHOSEN_PICS_TITLE, HEB_DISCLAIMER } = addPicsStepHebrew;
const { HEB_INVALID_MIME_TYPE, HEB_INVALID_SINGLE_SIZE, HEB_INVALID_TOTAL_SIZE } = errHebrew;
const singleSizeLimitMb = 2;
const totalSizeLimitMb = 10;

const fieldNames = ["pictures"]
const AddPics = () => {
    const { submitCount, errors, register, watch } = useFormContext();
    const pictures = watch("pictures", []);
    return (
        <div>
            <h5>{HEB_TITLE}</h5>
            <div className="fields pics">
                <input id="file-input" name={fieldNames[0]} ref={register(validationConfig.pictures)} type="file" multiple />
                <WithErrorMessageContainer>
                    <label name={fieldNames[0]} id="actual-input" htmlFor="file-input">
                        {HEB_CHOOSE_PICS}
                    </label>
                </WithErrorMessageContainer>
                <div className="inner-focus-in-form">
                    <div className="filenames">
                        <div className="disclaimer">{HEB_DISCLAIMER(singleSizeLimitMb, totalSizeLimitMb)}</div>
                        {pictures.length > 0 && (
                            <>
                                <div>{HEB_CHOSEN_PICS_TITLE}</div>
                                <ol>
                                    {Array.from(pictures).map(file => <li>{file.name}: {file.size/1000000}Mb</li>)}
                                </ol>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { AddPics, fieldNames };