import React from 'react';


const Button = ({ text, dispatch }) => {
    return (
        <div
            className="AddListing__button link pure-u-sm-1-2"
            onClick={dispatch}>
            {text}
        </div>
    )
}


const ButtonContainer = ({ children }) => (
    <div className="link-group pure-g">
        {children}
    </div>
);

export { Button, ButtonContainer };

