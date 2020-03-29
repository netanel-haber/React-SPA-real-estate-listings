import '#src#/styles/components/forms/form-utilities.scss';
import React, { useRef } from 'react';
import { FormContext, useForm } from 'react-hook-form';
import{ WithDivsAndLabels } from '../withDivAndLabel';
import { formHebrew } from '../heb';
import onSubmit from './submit';
import { validationConfig } from '../utilities';


const { HEB_EMAIL, HEB_SEND, HEB_PASSWORD, HEB_REENTER_PASSWORD, HEB_PHONE_NUMBER, HEB_NAME, HEB_LAST_NAME, HEB_EXPLANATION } = formHebrew;
const { email, name, password, phoneNumber, reEnter } = validationConfig;


const SignupForm = () => {
    const formMethods = useForm();
    const { register, handleSubmit, watch } = formMethods;
    const curPassRef = useRef({});
    curPassRef.current = watch("password", "");
    return (
        <FormContext {...formMethods}>
            <div>
                < form className="gen-form" onSubmit={handleSubmit(onSubmit)} >
                    <WithDivsAndLabels requiredIndices={[0, 1, 2]} texts={[HEB_EMAIL, HEB_PASSWORD, HEB_REENTER_PASSWORD, HEB_PHONE_NUMBER, HEB_NAME, HEB_LAST_NAME]}>
                        < input name="email" type="email" className="pure-input-rounded eng" autoComplete="email" ref={register(email())} />
                        < input name="password" type="password" className="pure-input-rounded eng" autoComplete="new-password"  ref={register(password())} />
                        < input name="reEnterPassword" type="password" className="pure-input-rounded eng" autoComplete="off"  ref={register(reEnter(curPassRef))} />
                        < input name="phoneNumber" className="pure-input-rounded eng"  ref={register(phoneNumber)} />
                        < input name="name" className="pure-input-rounded"  ref={register(name)} />
                        < input name="lastName" className="pure-input-rounded"  ref={register(name)} />
                    </WithDivsAndLabels>
                    <div className="submit-container pure-control-group">
                        <button className="pure-button pure-button-primary" type="submit" ref={register}>{HEB_SEND}</button>
                    </div>
                </form >
            </div>
        </FormContext>
    )
}

export default SignupForm;
