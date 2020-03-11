import React, { useState } from 'react';
import '../../styles/components/Signup/Signup.scss';
import SignupForm from '../forms/signup/Signup';


const Signup = () => {
    return (
        <div>
            <div className="Signup__container">
                <SignupForm />
            </div>
        </div>
    )
}

export default Signup;