import classnames from 'classnames';
import React from 'react';

const RadioLabelWithDiv = ({ text, htmlFor, active }) => {
    return (
        <label htmlFor={htmlFor} className={classnames("pure-u-1 pure-u-sm-1-2", { active })}>
            {text}
        </label>
    );
}

export default RadioLabelWithDiv;