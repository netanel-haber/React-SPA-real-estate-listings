import React from 'react';
import WithErrorMessageContainer from './WithErrorMessageContainer';
const WithDivAndLabel = (el, text, required = false) => {
    return (
        <div className="pure-control-group" required={required}>
            <label htmlFor={el.props.name}>{text}</label>
            <WithErrorMessageContainer>
                {el}
            </WithErrorMessageContainer>
        </div>
    )
};

export default WithDivAndLabel;