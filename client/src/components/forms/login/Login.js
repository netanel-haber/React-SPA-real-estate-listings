import React from 'react';
import { FormContext, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { formHebrew } from '../heb';
import { validationConfig } from '../utilities';
import {WithDivsAndLabels} from '../withDivAndLabel';
import onSubmit from './submit';

const { HEB_EMAIL, HEB_PASSWORD, HEB_SEND } = formHebrew;
const { email, password } = validationConfig;


const Login = () => {
    const history = useHistory();
    const formMethods = useForm()
    const { register, handleSubmit } = formMethods;
    return (
        <FormContext {...formMethods}>
            <div>
                <form className="gen-form" onSubmit={handleSubmit(data => onSubmit(data, history))}>
                    <WithDivsAndLabels texts={[HEB_EMAIL,HEB_PASSWORD]} requiredIndices={[0,1]}>
                    < input  className="pure-input-rounded eng" name="email" autoComplete="email" ref={register(email(true))} />
                    < input type="password" className="pure-input-rounded eng" autoComplete="current-password" name="password" ref={register(password(true))} />
                    </WithDivsAndLabels>
                    <div className="submit-container pure-control-group">
                        <button className="pure-button pure-button-primary" type="submit" ref={register}>{HEB_SEND}</button>
                    </div>
                </form>
            </div>
        </FormContext>
    )
}

export default Login;
