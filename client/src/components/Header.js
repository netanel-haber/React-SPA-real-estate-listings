import React from 'react';
import '../styles/components/Header.scss';
import { NavLink } from 'react-router-dom';

const { sell, rent, roommates, commercial, personal, addListing } = {
    sell: "מכירה",
    rent: "השכרה",
    roommates: "דירות שותפים",
    commercial: 'נדל"ן מסחרי',
    personal: 'אזור אישי',
    addListing: 'פרסם מודעה'
};

const LinkShorthand = ({ to, text, className }) => (
    <NavLink
        activeClassName="active"
        className={className}
        to={to}>
        {text}
    </NavLink>
);


const Header = () => {
    return (
        <div className="Header__container">
            <nav>
                <NavLink to="/listings/forsale" className="Header__right-Link" activeClassName="active" >{sell}</NavLink>
                <NavLink to="/listings/rent" className="Header__right-Link" activeClassName="active" >{rent}</NavLink>
                <NavLink to="/listings/roommates" className="Header__right-Link" activeClassName="active" >{roommates}</NavLink>
                <NavLink to="/listings/commercial" className="Header__right-Link" activeClassName="active" >{commercial}</NavLink>
            </nav>
            <nav>
                <LinkShorthand to="/personal" text={personal + " 👤"} className="Header__left-Link" />
                <LinkShorthand to="/add-listing" text={addListing} className="Header__left-Link" />
            </nav>

        </div>
    );
}


export default Header;