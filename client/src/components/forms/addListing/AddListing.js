import '#src#/styles/components/forms/add-listing/AddListing.scss';
import React, { useState } from 'react';
import { FormContext, useForm } from 'react-hook-form';
import { formHebrew, addListingHebrew } from '../heb';
import { steps } from './steps/stepIndex';
import classnames from 'classnames';
import onSubmit from './submit';
import { ButtonContainer, Button } from './buttons';
import { useHistory } from 'react-router-dom';
const { HEB_SEND } = formHebrew;
const { HEB_STEP_FOOTER } = addListingHebrew;



const AddListing = () => {
    const formMethods = useForm();
    const history = useHistory();
    const { handleSubmit, errors, triggerValidation, clearError } = formMethods;
    const submittionMethod = handleSubmit(data => onSubmit(data, history));
    const [activeStep, updateActiveStep] = useState(0);
    const [timesNextWasClicked, incrementNextCount] = useState(0);
    return (
        <FormContext {...{ ...formMethods, formState: { submitCount: timesNextWasClicked } }}>
            <div>
                <form className="gen-form AddListing__form" onSubmit={submittionMethod, history}>
                    {steps.map(([Step, associatedFieldNames], index) => (
                        <div className={classnames({ AddListing__active: index === activeStep }, "step")} key={index}>
                            <Step />
                            <ButtonContainer>
                                <Button disabled={index === 0} text="הקודם" dispatch={() => { activeStep !== 0 && updateActiveStep(index - 1) }} />
                                <Button
                                    text={((index + 1) < steps.length) ? "הבא" : HEB_SEND}
                                    dispatch={((index + 1) < steps.length)
                                        ? (async () => {
                                            incrementNextCount(timesNextWasClicked + 1);
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
                </form>
            </div>
        </FormContext >
    )
}

export default AddListing;
