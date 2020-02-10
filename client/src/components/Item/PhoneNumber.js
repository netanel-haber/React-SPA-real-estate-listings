import React, { useContext } from 'react';

const { showPhone } = {
    showPhone: "הצג מספר טלפון"
};

const PhoneNumber = () => {
    return (
        <div className="PhoneNumberColumn">
            <div>
                <button className="show-phone-number-button">
                    <img width="15px" height="15px" src="/icons/phone.png"></img>
                    <div>
                        {showPhone}
                    </div>
                </button>
            </div>
        </div>
    )
}

export default PhoneNumber;