import React, { useState } from 'react';
import '../styles/components/Dropdown.scss';


const noop = () => { };




const Dropdown = ({ options, callback = noop }) => {
    const [curOption, changeOption] = useState(0);
    const [isOpen, toggleOpen] = useState(false);
    function onSelectClick(e) {
        e.preventDefault();
        toggleOpen(!isOpen)
    }
    function onOptionClick(e, index) {
        changeOption(options[index]);
        dispatchSorts(options[index][1])
        toggleOpen(false);
    };
    return (
        <div className="Dropdown__container">
            <div className="Dropdown__val"></div>
            <div className="Dropdown__drop"></div>
        </div>
    )
}

export default Dropdown;