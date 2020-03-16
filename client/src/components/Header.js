import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Header.scss';
import { HideAt, ShowAt } from 'react-with-breakpoints';
import Bullet from './Bullet';

const { forsale, rent, roommates, commercial, personal, addListing } = {
    forsale: "מכירה",
    rent: "השכרה",
    roommates: "דירות שותפים",
    commercial: 'נדל"ן מסחרי',
    personal: 'אזור אישי',
    addListing: 'פרסם מודעה'
};





const Dropdown = ({ options }) => {
    const [isOpen, toggleOpen] = useState(true);
    const [chosen, changeChosen] = useState(0);
    return (
        <div className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            {React.cloneElement(options[chosen],
                {
                    id: "menuLink1"
                }
            )}
            <ul className="pure-menu-children">
                {options.map((opt, index) => <li className="pure-menu-item" onClick={() => {
                    toggleOpen(false);
                    changeChosen(index);
                }}>{opt}</li>)}
            </ul>
        </div>
    )
}


const LinkShortHand = ({ to, content, exact = false }) => <NavLink exact={exact} to={to} className="Header__link pure-menu-link" activeClassName="active" >{content}</NavLink>


const brand = <LinkShortHand exact to="/" content={<img height="20px" src="//assets.yad2.co.il/yad2site/y2assets/images/header/yad2Logo.png" />} />
const listingLinks = [
    <LinkShortHand to="/listings/forsale" content={forsale} />,
    <LinkShortHand to="/listings/rent" content={rent} />,
    <LinkShortHand to="/listings/roommates" content={roommates} />,
    <LinkShortHand to="/listings/commercial" content={commercial} />
]
const userLinks = [
    <LinkShortHand to="/personal" content={personal} />,
    <LinkShortHand to="/add-listing" content={addListing} />,
]




const Header = () => {
    return (
        <div className="pure-menu pure-menu-horizontal">
            <HideAt breakpoint="mediumAndBelow">
                <nav>
                    <div className="pure-menu-item">{brand}</div>
                    {listingLinks.map(link => <div className="pure-menu-item">{link}</div>)}
                </nav>
            </HideAt>
            <ShowAt breakpoint="mediumAndBelow">
                <Dropdown options={listingLinks} />
            </ShowAt>
            <nav>
                {userLinks.map(link => <div className="pure-menu-item">{link}</div>)}
            </nav>
        </div >
    );
}


export default Header;