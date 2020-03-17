import React from 'react';
import Signup from './Signup';


const Personal = () => {
    console.log(localStorage.getItem("token"))
    return (
        <div>
            Personal
            <Signup />
        </div>
    )
}


export default Personal;