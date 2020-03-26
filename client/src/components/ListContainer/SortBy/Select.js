import React, { useState, useRef, useEffect } from 'react';
import Bullet from '../../Bullet';
import classnames from 'classnames';

const Option = ({ onClick, text, selected, bullet }) => (
    <div onClick={onClick}>
        {bullet && <Bullet {...{ selected }}></Bullet>}
        <div>{text}</div>
    </div>
);


const Select = ({ dropOptions, dispatch, bullet = true, className = "", valEqualsText = false, defOption }) => {
    const options = valEqualsText ? dropOptions.map(opt => [opt, opt]) : Object.entries(dropOptions);
    const [[text, value], changeSelected] = useState(defOption || options[0]);
    const [isOpen, toggleOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        if (dropdownRef.current && isOpen)
            dropdownRef.current.focus();
    });
    function onSelectClick(e) {
        e.preventDefault();
        toggleOpen(!isOpen)
    }
    function onOptionClick(index) {
        changeSelected(options[index]);
        dispatch(options[index][1])
        toggleOpen(false);
    };
    return (
        <div className={classnames("enhanced-dropdown", className)}>
            <div className="actual-select" onMouseDown={onSelectClick}>
                <div>{text}</div>
                <span />
            </div>
            <div ref={dropdownRef} style={{ display: isOpen ? "block" : "none" }} className="actual-dropdown" tabIndex="0" onBlur={() => { toggleOpen(false) }}>
                {options.map(([text, childValue], index) =>
                    <Option bullet={bullet} key={text} text={text} onClick={(e) => onOptionClick(index)} selected={childValue === value} />)}
            </div>
        </div>
    )
}




export default Select;
