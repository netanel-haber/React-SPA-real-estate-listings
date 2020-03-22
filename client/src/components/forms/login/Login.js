import '#src#/styles/components/forms/form-utilities.scss';
import React from 'react';
import { FormContext, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { formHebrew } from '../heb';
import { validationConfig } from '../utilities';
import WithDivAndLabel from '../WithDivAndLabel';
import onSubmit from './submit';

const { HEB_EMAIL, HEB_PASSWORD, HEB_SEND } = formHebrew;
const { email, password } = validationConfig;


const Login = () => {
    const history = useHistory();
    const { register, handleSubmit, errors, formState: { submitCount } } = useForm()
    return (
        <FormContext {...{ submitCount, errors }}>
            <div>
                <form className="gen-form" onSubmit={handleSubmit(data => onSubmit(data, history))}>
                    <fieldset>
                        <WithDivAndLabel text={HEB_EMAIL}>
                            < input type="email" className="pure-input-rounded eng" name="email" autoComplete="email" ref={register(email(true))} />
                        </WithDivAndLabel>
                        <WithDivAndLabel text={HEB_PASSWORD}>
                            < input type="password" className="pure-input-rounded eng" autoComplete="current-password" name="password" ref={register(password(true))} />
                        </WithDivAndLabel>
                        <div className="submit-container pure-control-group">
                            <button className="pure-button pure-button-primary" type="submit" ref={register}>{HEB_SEND}</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </FormContext>
    )
}

export default Login;
