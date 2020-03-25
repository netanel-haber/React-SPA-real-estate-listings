import React, { useState } from 'react';
import Bullet from '../../Bullet';
import classnames from 'classnames';

const Option = ({ onClick, text, selected, bullet }) => (
    <div onClick={onClick}>
        {bullet && <Bullet {...{ selected }}></Bullet>}
        <div>{text}</div>
    </div>
);


const Select = ({ dropOptions, dispatch, bullet = true, className = "" }) => {
    const options = Object.entries(dropOptions);
    const [[text, value], changeOption] = useState(options[0]);
    const [isOpen, toggleOpen] = useState(false);
    function onSelectClick(e) {
        e.preventDefault();
        toggleOpen(!isOpen)
    }
    function onOptionClick(e, index) {
        changeOption(options[index]);
        dispatch(options[index][1])
        toggleOpen(false);
    };
    return (
        <div className={classnames("enhanced-dropdown", className)}>
            <div className="actual-select" onClick={onSelectClick}>
                <div>{text}</div>
                <span />
            </div>
            {isOpen &&
                <div className="actual-dropdown">
                    {options.map(([text, childValue], index) =>
                        <Option bullet={bullet} key={text} text={text} onClick={(e) => onOptionClick(e, index)} selected={childValue === value} />)}
                </div>}
        </div>
    )
}

export default Select;
