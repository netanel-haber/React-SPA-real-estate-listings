import React from 'react';
import WithErrorMessageContainer from './WithErrorMessageContainer';

const WithDivAndLabel = ({ text, error, children: el }) => {
    return (
        <div className="pure-control-group">
            <label htmlFor={el.props.name}>{text}:</label>
            <WithErrorMessageContainer>
                {el}
                {error}
            </WithErrorMessageContainer>
        </div>
    )
};

export default WithDivAndLabel;