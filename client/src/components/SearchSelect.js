import React, { useState } from 'react';
import classnames from 'classnames';

const lengthBreakpoint = 1;

const SearchSelect = ({ optionsRef, dispatch, className = "", placeholder, disabled = false }) => {
    const [searchValue, updateSearch] = useState("");
    const [isOpen, toggleOpen] = useState(false);
    return (
        <div className={classnames("enhanced-dropdown", className)}>
            <input disabled={disabled} value={searchValue} className="actual-select pure-rounded-input" placeholder={placeholder} onClick={() => { !isOpen && toggleOpen(true) }} onChange={(e) => {
                const value = e.target.value;
                updateSearch(value);
                if (value.length < lengthBreakpoint && (isOpen))
                    toggleOpen(false);
                if (value.length >= lengthBreakpoint && (!isOpen))
                    toggleOpen(true);
            }} />
            <div style={{ display: isOpen ? "block" : "none" }}
                className="actual-dropdown"
                tabIndex="0">
                {(searchValue.length >= lengthBreakpoint) && optionsRef.current.filter(opt => opt.includes(searchValue)).map((city, index) =>
                    <div
                        key={index}
                        onClick={() => { dispatch(city); updateSearch(city); toggleOpen(false) }}>
                        {city.split(new RegExp(`(${searchValue})`, "g")).map((sub, index) =>
                            <span style={{ whiteSpace: "pre" }} key={index}>
                                {(sub === searchValue) ? <strong>{sub}</strong> : sub}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchSelect;