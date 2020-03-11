import React, { useRef } from 'react';
import { FormContext, useForm } from 'react-hook-form';
import '../../styles/components/forms/Signup.scss';
import { emailValidConfig, passwordValidConfig, reEnterValidConfig } from './Signup_utilities';
import WithDivAndLabel from './WithDivAndLabel';

const { HEB_EMAIL, HEB_SEND, HEB_PASSWORD, HEB_REENTER_PASSWORD, HEB_PHONE_NUMBER, HEB_NAME, HEB_LAST_NAME, HEB_EXPLANATION } = {
    HEB_EMAIL: "כתובת דוא\"ל",
    HEB_SEND: "שלח",
    HEB_PASSWORD: "סיסמה",
    HEB_REENTER_PASSWORD: "הזן שנית",
    HEB_PHONE_NUMBER: "מספר טלפון",
    HEB_NAME: "שם",
    HEB_LAST_NAME: "שם משפחה",
    HEB_EXPLANATION: "השדות המסומנים בכוכבית הינם שדות חובה. שאר השדות ישמשו בתור פרטי התקשרות בתיאור הנכס כברירת מחדל."
}


const SignupForm = () => {
    const { register, handleSubmit, errors, watch, formState: { submitCount } } = useForm()
    const onSubmit = data => console.log(data);
    const curPassRef = useRef({});
    curPassRef.current = watch("password", "");
    return (
        <FormContext {...{ submitCount, errors }}>
            <div>
                < form className="Signup__form" onSubmit={handleSubmit(onSubmit)} >
                    <fieldset className="required-fields">
                        <WithDivAndLabel text={HEB_EMAIL}>
                            < input className="pure-input-rounded" name="email" ref={register(emailValidConfig)} />
                        </WithDivAndLabel>
                        <WithDivAndLabel text={HEB_PASSWORD}>
                            < input type="password" className="pure-input-rounded" autoComplete="new-password" name="password" ref={register(passwordValidConfig)} />
                        </WithDivAndLabel>
                        <WithDivAndLabel text={HEB_REENTER_PASSWORD}>
                            < input type="password" className="pure-input-rounded" autoComplete="off" name="reEnterPassword"
                                ref={register(reEnterValidConfig(curPassRef))} />
                        </WithDivAndLabel>
                    </fieldset>
                    <fieldset>
                    <WithDivAndLabel text={HEB_PHONE_NUMBER}>
                        < input className="pure-input-rounded" name="phoneNumber" ref={register(passwordValidConfig)} />
                    </WithDivAndLabel>
                    <WithDivAndLabel text={HEB_NAME}>
                        < input className="pure-input-rounded" name="name" ref={register()} />
                    </WithDivAndLabel>
                    <WithDivAndLabel text={HEB_LAST_NAME}>
                        < input className="pure-input-rounded" name="lastName" ref={register()} />
                    </WithDivAndLabel>
                    </fieldset>
                    <span class="pure-form-message-inline">{HEB_EXPLANATION}</span>
                    <div className="Signup__submit pure-control-group">
                        <button className="pure-button pure-button-primary" type="submit" ref={register}>{HEB_SEND}</button>
                    </div>
                </form >
            </div>
        </FormContext>
    )
}

export default SignupForm;
