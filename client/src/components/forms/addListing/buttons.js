import React from 'react';
import classnames from 'classnames';

const Button = ({ text, dispatch, disabled }) => {
    return (
        <div
            className={classnames("AddListing__button link pure-u-sm-1-2", { disabled })}
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

