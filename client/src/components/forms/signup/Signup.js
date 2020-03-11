import React, { useRef } from 'react';
import { FormContext, useForm } from 'react-hook-form';
import '../../../styles/components/forms/Signup.scss';
import {validationConfig} from './utilities';

import { formHebrew } from './heb';
import WithDivAndLabel from '../WithDivAndLabel';



const { HEB_EMAIL, HEB_SEND, HEB_PASSWORD, HEB_REENTER_PASSWORD, HEB_PHONE_NUMBER, HEB_NAME, HEB_LAST_NAME, HEB_EXPLANATION } = formHebrew;
const { email, name, password, phoneNumber, reEnter } = validationConfig;
const onSubmit = async (data) => {
    const sanitized = Object.fromEntries(Object.entries(data).map(([key, value]) => ([key, value.trim()])));
    debugger;
}


const SignupForm = () => {
    const { register, handleSubmit, errors, watch, formState: { submitCount } } = useForm()
    const curPassRef = useRef({});
    curPassRef.current = watch("password", "");
    return (
        <FormContext {...{ submitCount, errors }}>
            <div>
                < form className="Signup__form" onSubmit={handleSubmit(onSubmit)} >
                    <fieldset className="required-fields">
                        <WithDivAndLabel text={HEB_EMAIL}>
                            < input className="pure-input-rounded eng" name="email" autoComplete="on" ref={register(email)} />
                        </WithDivAndLabel>
                        <WithDivAndLabel text={HEB_PASSWORD}>
                            < input type="password" className="pure-input-rounded eng" autoComplete="new-password" name="password" ref={register(password)} />
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
                    </fieldset>
                    <div className="message pure-control-group"><span className="pure-form-message-inline">{HEB_EXPLANATION}</span></div>
                    <div className="Signup__submit pure-control-group">
                        <button className="pure-button pure-button-primary" type="submit" ref={register}>{HEB_SEND}</button>
                    </div>
                </form >
            </div>
        </FormContext>
    )
}

export default SignupForm;
