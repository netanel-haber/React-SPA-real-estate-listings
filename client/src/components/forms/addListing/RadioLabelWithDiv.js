import classnames from 'classnames';
import React from 'react';

const RadioLabelWithDiv = ({ text, htmlFor, active }) => {
    return (
        <label htmlFor={htmlFor} className={classnames("", { active })}>
            {text}
        </label>
    );
}

export default RadioLabelWithDiv;