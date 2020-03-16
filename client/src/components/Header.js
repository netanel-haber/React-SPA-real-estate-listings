import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { HideAt, ShowAt } from 'react-with-breakpoints';
import '../styles/components/Header.scss';
import classnames from 'classnames';

const { forsale, rent, roommates, commercial, personal, addListing, apts } = {
    forsale: "מכירה",
    rent: "השכרה",
    roommates: "דירות שותפים",
    commercial: 'נדל"ן מסחרי',
    personal: 'אזור אישי',
    addListing: 'פרסם מודעה',
    apts: 'דירות'
};


function LinkShortHand({ to, content, exact = false, className = "" }) { return <NavLink exact={exact} to={to} className={"Header__link pure-menu-link " + className} activeClassName="active">{content}</NavLink> }
const brand = <LinkShortHand exact to="/" className="brand" content={<img src="//assets.yad2.co.il/yad2site/y2assets/images/header/yad2Logo.png" />} />
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
            <nav>
                <div className="pure-menu-item">{brand}</div>
            </nav>
            <nav>
                <HideAt breakpoint="mediumAndBelow">
                    {listingLinks.map((link, index) => <div key={index} className="pure-menu-item">{link}</div>)}
                </HideAt>
                <ShowAt breakpoint="mediumAndBelow">
                    <Dropdown options={listingLinks} />
                </ShowAt>
            </nav>
            <nav>
                {userLinks.map((link, index) => <div key={index} className="pure-menu-item">{link}</div>)}
            </nav>
        </div >
    );
}

function Dropdown({ options }) {
    const { location: { pathname } } = useHistory();
    return (
        <div className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a id="menuLink1" style={{ cursor: "pointer" }} className={classnames("Header__link pure-menu-link pure-menu-item", {
                active: options.some(opt => opt.props.to === pathname)
            })}>{apts}<span /></a>
            <ul className="pure-menu-children">
                {options.map((opt, index) => <li key={index} className="pure-menu-item">{opt}</li>)}
            </ul>
        </div >
    )
}

export default Header;