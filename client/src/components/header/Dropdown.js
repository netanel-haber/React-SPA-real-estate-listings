import classnames from 'classnames';
import React from 'react';
import { useHistory } from 'react-router-dom';



function Dropdown({ options = [], text = "" }) {
    const { location: { pathname } } = useHistory();
    return (
        <div className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a id="menuLink1" style={{ cursor: "pointer" }} className={classnames("Header__link pure-menu-link pure-menu-item", {
                active: options.some(opt => opt.props.to === pathname)
            })}>{text}<span /></a>
            <ul className="pure-menu-children">
                {options.map((opt, index) => <li key={index} className="pure-menu-item">{opt}</li>)}
            </ul>
        </div >
    )
}

export default Dropdown;