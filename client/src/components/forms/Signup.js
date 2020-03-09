import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import '../../styles/components/forms/Signup.scss';
import { emailValidConfig, passwordValidConfig, reEnterValidConfig } from './Signup_utilities';
import WithDivAndLabel from './WithDivAndLabel';

const { HEB_EMAIL, HEB_SEND, HEB_PASSWORD, HEB_REENTER_PASSWORD } = {
    HEB_EMAIL: "כתובת דוא\"ל",
    HEB_SEND: "שלח",
    HEB_PASSWORD: "סיסמה",
    HEB_REENTER_PASSWORD: "הזן שנית"
}


const SignupForm = () => {
    const { register, handleSubmit, errors, watch } = useForm()
    const onSubmit = data => console.log(data);
    const curPassRef = useRef({});
    curPassRef.current = watch("password", "");
    return (
        <div>
            < form className="Signup__form" onSubmit={handleSubmit(onSubmit)} >
                <WithDivAndLabel text={HEB_EMAIL} error={errors?.email?.message}>
                    < input className="pure-input-rounded" name="email" ref={register(emailValidConfig)} />
                </WithDivAndLabel>
                <WithDivAndLabel text={HEB_PASSWORD} error={errors?.password?.message}>
                    < input type="password" className="pure-input-rounded" autoComplete="off" name="password" ref={register(passwordValidConfig)} />
                </WithDivAndLabel>
                <WithDivAndLabel text={HEB_REENTER_PASSWORD} error={errors?.reEnterPassword?.message}>
                    < input type="password" className="pure-input-rounded" autoComplete="off" name="reEnterPassword"
                        ref={register(reEnterValidConfig(curPassRef))} />
                </WithDivAndLabel>
                <div className="Signup__submit pure-control-group">
                    <button className="pure-button pure-button-primary" type="submit" ref={register}>{HEB_SEND}</button>
                </div>
            </form >
        </div>
    )
}

export default SignupForm;
