import React, { useState } from 'react';
import classnames from 'classnames';
import '#src#/styles/components/SearchSelect.scss';
import { useFormContext } from 'react-hook-form';


const lengthBreakpoint = 2;
const noop = () => { };
const SearchSelect = ({ options, className = "", placeholder, disabled = false, 
name, callback = noop, validationConfig = {}, prefiltered = false }) => {
    const [isOpen, toggleOpen] = useState(false);
    const { register, watch, setValue } = useFormContext();
    const curValue = watch(name);
    const shouldSearch = (curValue?.length >= lengthBreakpoint);
    return (
        <div className={classnames("enhanced-dropdown", className)} tabIndex="0" >
            <input
                {...{ name, disabled, placeholder }}
                autoComplete="off"
                ref={register(validationConfig)}
                onBlur={(e) => e.relatedTarget?.id !== "dropdown" && toggleOpen(false)}
                className="actual-select pure-rounded-input"
                onClick={() => { (!isOpen && options.length) && toggleOpen(true) }}
                onChange={(e) => {
                    const { length } = e.target.value;
                    if (length < lengthBreakpoint && (isOpen))
                        toggleOpen(false);
                    if (length >= lengthBreakpoint && (!isOpen))
                        toggleOpen(true);
                }} />
            {isOpen && (
                <div
                    id="dropdown"
                    className="actual-dropdown SearchSelect-dropdown"
                    tabIndex="0"
                    onBlur={() => toggleOpen(false)}>
                    {shouldSearch && (prefiltered ? options : options.filter(opt => opt.includes(curValue)))
                        .map((opt, index) =>
                            <div
                                key={index}
                                onMouseDown={() => { setValue(name, opt); callback(opt); toggleOpen(false) }}>
                                {opt.split(new RegExp(`(${curValue})`, "g")).map((sub, index) =>
                                    <React.Fragment key={index}>{(sub === curValue) ? <strong>{sub}</strong> : sub}</React.Fragment>)}
                            </div>
                        )}
                </div>)}

        </div>
    )
};

export default SearchSelect;