import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../styles/components/forms/Signup.scss';
import { emailValidConfig, passwordValidConfig } from './Signup_utilities';

const { HEB_EMAIL, HEB_SEND, HEB_PASSWORD } = {
    HEB_EMAIL: "כתובת דוא\"ל",
    HEB_SEND: "שלח",
    HEB_PASSWORD: "סיסמה"
}

const WithDivAndLabel = ({ text, errors, children }) => {
    const el = children;
    const [errVisi, toggleVisi] = useState("visible");
    useEffect(() => {
        toggleVisi("visible");
        setTimeout(() => { toggleVisi("hidden") }, 1500)
    }, [errors])
    return (
        <div className="Signup__unit pure-control-group">
            <label>
                {text}:
            {el}
                {errors[el.props.name] && <div style={{ visibility: errVisi }} className="Signup__error-message">{errors[el.props.name].message}</div>}
            </label>
        </div>
    )
};


const SignupForm = () => {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => console.log(data)
    return (
        <div>
            < form className="Signup__form pure-form pure-form-aligned" onSubmit={handleSubmit(onSubmit)} >
                <WithDivAndLabel text={HEB_EMAIL} errors={errors}>
                    < input className="pure-input-rounded" name="email" ref={register(emailValidConfig)} />
                </WithDivAndLabel>
                <WithDivAndLabel text={HEB_PASSWORD} error={errors}>
                    < input className="pure-input-rounded" name="password" ref={register(passwordValidConfig)} />
                </WithDivAndLabel>
                <div className="Signup__submit">
                    <button className="pure-button pure-button-primary" type="submit" ref={register}>{HEB_SEND}</button>
                </div>
            </form >
        </div>
    )
}

export default SignupForm;
