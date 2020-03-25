import '#src#/styles/components/forms/add-listing/AddListing.scss';
import React, { useState } from 'react';
import { FormContext, useForm } from 'react-hook-form';
import { formHebrew, addListingHebrew } from '../heb';
import { steps } from './steps/stepIndex';
import classnames from 'classnames';
import onSubmit from './submit';
import { ButtonContainer, Button } from './buttons';
const { HEB_SEND } = formHebrew;
const { HEB_STEP_FOOTER } = addListingHebrew;


const AddListing = () => {
    const { register, handleSubmit, errors, formState: { submitCount }, triggerValidation, clearError } = useForm()
    const submittionMethod = handleSubmit(onSubmit);
    const [activeStep, updateActiveStep] = useState(0);
    return (
        <FormContext {...{ errors, submitCount, register }}>
            <div>
                <form className="gen-form AddListing__form" onSubmit={submittionMethod}>
                    {steps.map(([Step, associatedFieldNames], index) => (
                        <div className={classnames({ AddListing__active: index === activeStep }, "step")} key={index}>
                            <Step />
                            <ButtonContainer>
                                <Button disabled={index === 0} text="הקודם" dispatch={() => { activeStep !== 0 && updateActiveStep(index - 1) }} />
                                <Button
                                    text={((index + 1) < steps.length) ? "הבא" : HEB_SEND}
                                    dispatch={((index + 1) < steps.length)
                                        ? (async () => {
                                            await triggerValidation(associatedFieldNames);
                                            if (associatedFieldNames.every(field => !errors.hasOwnProperty(field))) {
                                                clearError(associatedFieldNames);
                                                updateActiveStep(index + 1)
                                            }
                                        })
                                        : () => submittionMethod()}
                                />
                            </ButtonContainer>
                        </div>
                    ))}
                    <h6>{HEB_STEP_FOOTER(activeStep + 1, steps.length)}</h6>
                    <button>submit</button>
                </form>
            </div>
        </FormContext >
    )
}

export default AddListing;
