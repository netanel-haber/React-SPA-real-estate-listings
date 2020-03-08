import React from 'react';
import { useForm } from 'react-hook-form';
import '../../styles/components/forms/Signup.scss';
import isEmail from 'validator/es/lib/isEmail';
import isMobilePhone from 'validator/es/lib/isMobilePhone';


const { HEB_FAMILY_NAME, HEB_EMAIL, HEB_NAME, HEB_SEND, HEB_PHONE_NUMBER } = {
    HEB_NAME: "שם פרטי",
    HEB_FAMILY_NAME: "שם משפחה",
    HEB_EMAIL: "כתובת דוא\"ל",
    HEB_PHONE_NUMBER: "מספר טלפון",
    HEB_SEND: "שלח"
}

const withDivAndLabel = (el, text, errors, errorText) => {
    return (
        <div className="pure-control-group">
            <label htmlFor={el.props.name}>
                {text}
            </label>
            {el}
            {errors[el.props.name] && errorText}
        </div>
    )
}

const emailValidConfig = {
    required:true,
    vali
}



const SignupForm = () => {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div>
            < form className="Signup__form pure-form pure-form-aligned" onSubmit={handleSubmit(onSubmit)} >
                {withDivAndLabel(< input className="pure-input-rounded" name="email" ref={register(emailValidConfig)} />, HEB_EMAIL, errors)}
                <div className="Signup__submit">
                    <button className="pure-button pure-button-primary" type="submit" ref={register}>{HEB_SEND}</button>
                </div>
            </form >
        </div>
        // // {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */ }
    )
}

export default SignupForm;
