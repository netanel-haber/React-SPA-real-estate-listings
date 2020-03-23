import '#src#/styles/components/forms/form-utilities.scss';
import React, { useRef } from 'react';
import { FormContext, useForm } from 'react-hook-form';
import withDivAndLabel from '../withDivAndLabel';
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
                    {withDivAndLabel(< input type="email" className="pure-input-rounded eng" name="email" autoComplete="email" ref={register(email())} />,
                        HEB_EMAIL, true)}
                    {withDivAndLabel(< input type="password" className="pure-input-rounded eng" autoComplete="new-password" name="password" ref={register(password())} />,
                        HEB_PASSWORD, true)}
                    {withDivAndLabel(< input type="password" className="pure-input-rounded eng" autoComplete="off" name="reEnterPassword" ref={register(reEnter(curPassRef))} />,
                        HEB_REENTER_PASSWORD, true)}
                    {withDivAndLabel(< input className="pure-input-rounded eng" name="phoneNumber" ref={register(phoneNumber)} />,
                        HEB_PHONE_NUMBER)}
                    {withDivAndLabel(< input className="pure-input-rounded" name="name" ref={register(name)} />,
                        HEB_NAME)}
                    {withDivAndLabel(< input className="pure-input-rounded" name="lastName" ref={register(name)} />,
                        HEB_LAST_NAME)}
                    <div className="submit-container pure-control-group">
                        <button className="pure-button pure-button-primary" type="submit" ref={register}>{HEB_SEND}</button>
                    </div>
                </form >
            </div>
        </FormContext>
    )
}

export default SignupForm;
