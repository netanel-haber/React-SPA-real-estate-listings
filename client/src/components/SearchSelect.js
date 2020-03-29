import React, { useState } from 'react';
import classnames from 'classnames';
import '#src#/styles/components/SearchSelect.scss';
import { useFormContext } from 'react-hook-form';
import { validationConfig } from './forms/utilities.js';

const lengthBreakpoint = 1;

const SearchSelect = ({ optionsRef, className = "", placeholder, disabled = false, name }) => {
    const [isOpen, toggleOpen] = useState(false);
    const { register, watch, setValue } = useFormContext();
    const curValue = watch(name);
    return (
        <div className={classnames("enhanced-dropdown", className)}>
            <input
                {...{ name, disabled, placeholder }}
                autoComplete="off"
                ref={register(validationConfig.required)}
                className="actual-select pure-rounded-input"
                onClick={() => { !isOpen && toggleOpen(true) }}
                onChange={(e) => {
                    const value = e.target.value;
                    if (value.length < lengthBreakpoint && (isOpen))
                        toggleOpen(false);
                    if (value.length >= lengthBreakpoint && (!isOpen))
                        toggleOpen(true);
                }} />
            <div style={{ display: isOpen ? "block" : "none" }}
                className="actual-dropdown SearchSelect-dropdown"
                tabIndex="0">
                {(curValue?.length >= lengthBreakpoint) && optionsRef.current.filter(opt => opt.includes(curValue))
                    .map((city, index) =>
                        <div
                            key={index}
                            onClick={() => { setValue(name, city); toggleOpen(false) }}>
                            {city.split(new RegExp(`(${curValue})`, "g")).map((sub, index) =>
                                <React.Fragment key={index}>{(sub === curValue) ? <strong>{sub}</strong> : sub}</React.Fragment>)}
                        </div>
                    )}
            </div>
        </div>
    )
}

export default SearchSelect;