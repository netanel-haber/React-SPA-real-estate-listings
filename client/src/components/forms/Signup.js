import React from 'react';
import { useForm } from 'react-hook-form';
import '../../styles/components/forms/Signup.scss';

const { HEB_FAMILY_NAME, HEB_EMAIL, HEB_NAME, HEB_SEND } = {
    HEB_NAME: "שם פרטי",
    HEB_FAMILY_NAME: "שם משפחה",
    HEB_EMAIL: "כתובת דוא\"ל",
    HEB_SEND: "שלח"
}

const withDivAndLabel = (el, text, ) => {
    return (
        <div>
            <label htmlFor={el.props.name}>
                {text}
            </label>
            {el}
        </div>
    )
}


const SignupForm = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }
    console.log(watch('example')) // watch input value by passing the name of it
    return (
        <div>
            < form className="Signup__form" onSubmit={handleSubmit(onSubmit)} >
                {withDivAndLabel(< input name="firstName" ref={register} />, HEB_NAME)}
                {withDivAndLabel(< input name="familyName" ref={register} />, HEB_FAMILY_NAME)}
                {withDivAndLabel(< input type="email" name="email" ref={register} />, HEB_EMAIL)}

                {/* include validation with required or other standard HTML validation rules */}
                {/* < input name="exampleRequired" ref={register({ required: true })} /> */}
                {/* errors will return when field validation fails  */}
                {/* {errors.exampleRequired && <span>This field is required</span>} */}
                <div><input type="submit" ref={register} value={HEB_SEND} /></div>
            </form >
        </div>
        // // {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */ }
    )
}

export default SignupForm;
