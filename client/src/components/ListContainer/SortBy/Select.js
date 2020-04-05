import React, { useState, useRef, useEffect } from 'react';
import Bullet from '../../Bullet';
import classnames from 'classnames';
import { useFormContext } from 'react-hook-form';

const Option = ({ onClick, text, selected, bullet = false }) => (
    <div onClick={onClick}>
        {bullet && <Bullet {...{ selected }}></Bullet>}
        <div>{text}</div>
    </div>
);

const Select = ({ options, dispatch, bullet = true, className = "", selectedOption }) => {
    const [text, value] = selectedOption;

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
        dispatch(options[index][1])
        toggleOpen(false);
    };
    return (
        <div className={classnames("enhanced-dropdown", className)}>
            <div className="actual-select" onMouseDown={onSelectClick}>
                {text}
                <span />
            </div>
            <div ref={dropdownRef} style={{ display: isOpen ? "block" : "none" }} className="actual-dropdown" tabIndex="0" onBlur={() => { toggleOpen(false) }}>
                {options.map(([text, childValue], index) =>
                    <Option bullet={bullet} key={text} text={text} onClick={() => onOptionClick(index)} selected={childValue === value} />)}
            </div>
        </div>
    )
}

const FormSelect = React.forwardRef(function FormSelect({ options, className = "", name }, ref) {
    const { setValue } = useFormContext();
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
    return (
        <div className={classnames("enhanced-dropdown", className)}>
            <div className="actual-select" onMouseDown={onSelectClick}>
                <input className="disguised__input" readOnly ref={ref} name={name}></input>
                <span />
            </div>
            <div ref={dropdownRef} style={{ display: isOpen ? "block" : "none" }} className="actual-dropdown" tabIndex="0" onBlur={() => { toggleOpen(false) }}>
                {options.map((opt, index) =>
                    <Option key={index} text={opt} onClick={() => {
                        setValue(name, opt);
                        toggleOpen(false)
                    }} />)}
            </div>
        </div>
    )
})

export { FormSelect }


export default Select;
