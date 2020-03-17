import '#src#/styles/components/forms/form-utilities.scss';
import React, { useRef } from 'react';
import { FormContext, useForm } from 'react-hook-form';
import WithDivAndLabel from '../WithDivAndLabel';
import { formHebrew } from '../heb';
import onSubmit from './submit';
import { validationConfig } from '../utilities';


const { HEB_EMAIL, HEB_SEND, HEB_PASSWORD, HEB_REENTER_PASSWORD, HEB_PHONE_NUMBER, HEB_NAME, HEB_LAST_NAME, HEB_EXPLANATION } = formHebrew;
const { email, name, password, phoneNumber, reEnter } = validationConfig;


const SignupForm = () => {
    const { register, handleSubmit, errors, watch, formState: { submitCount } } = useForm()
    const curPassRef = useRef({});
    curPassRef.current = watch("password", "");
    return (
        <FormContext {...{ submitCount, errors }}>
            <div>
                < form className="gen-form" onSubmit={handleSubmit(onSubmit)} >
                    <fieldset className="required-fields">
                        <WithDivAndLabel text={HEB_EMAIL}>
                            < input type="email" className="pure-input-rounded eng" name="email" autoComplete="email" ref={register(email())} />
                        </WithDivAndLabel>
                        <WithDivAndLabel text={HEB_PASSWORD}>
                            < input type="password" className="pure-input-rounded eng" autoComplete="new-password" name="password" ref={register(password())} />
                        </WithDivAndLabel>
                        <WithDivAndLabel text={HEB_REENTER_PASSWORD}>
                            < input type="password" className="pure-input-rounded eng" autoComplete="off" name="reEnterPassword" ref={register(reEnter(curPassRef))} />
                        </WithDivAndLabel>
                    </fieldset>
                    <fieldset>
                        <WithDivAndLabel text={HEB_PHONE_NUMBER}>
                            < input className="pure-input-rounded eng" name="phoneNumber" ref={register(phoneNumber)} />
                        </WithDivAndLabel>
                        <WithDivAndLabel text={HEB_NAME}>
                            < input className="pure-input-rounded" name="name" ref={register(name)} />
                        </WithDivAndLabel>
                        <WithDivAndLabel text={HEB_LAST_NAME}>
                            < input className="pure-input-rounded" name="lastName" ref={register(name)} />
                        </WithDivAndLabel>
                        <div className="submit-container pure-control-group">
                            <button className="pure-button pure-button-primary" type="submit" ref={register}>{HEB_SEND}</button>
                        </div>
                    </fieldset>
                </form >
            </div>
        </FormContext>
    )
}

export default SignupForm;
