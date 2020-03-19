import classnames from 'classnames';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { HideAt, ShowAt } from 'react-with-breakpoints';
import { logout } from '../fetch/listers';
import '../styles/components/Header.scss';
import { paths } from './pages/paths';
const { login, signup, myProfile, addListing, listingsPrefix, logout: logoutPath } = paths;

const { HEB_LOGOUT, HEB_FORSALE, HEB_RENT, HEB_ROOMMATES, HEB_COMMERCIAL, HEB_PERSONAL, HEB_ADD_LISTINGS, HEB_APTS, HEB_SIGNUP, HEB_LOGIN, HEB_MY_LISTINGS } = {
    HEB_FORSALE: "מכירה",
    HEB_RENT: "השכרה",
    HEB_ROOMMATES: "דירות שותפים",
    HEB_COMMERCIAL: 'נדל"ן מסחרי',
    HEB_PERSONAL: 'אזור אישי',
    HEB_ADD_LISTINGS: 'פרסם מודעה',
    HEB_APTS: 'דירות',
    HEB_SIGNUP: 'הרשם',
    HEB_LOGIN: 'התחבר',
    HEB_MY_LISTINGS: "הנכסים שלי",
    HEB_LOGOUT: 'התנתק'
};


const LogoutLink = () => {
    const history = useHistory();
    return (
        <a className="Header__link pure-menu-link" onClick={() => {
            logout().then(() => { history.push(logoutPath) })
        }}>{HEB_LOGOUT}</a>
    )
};




function LinkShortHand({ to, content, exact = false, className = "" }) { return <NavLink exact={exact} to={to} className={"Header__link pure-menu-link " + className} activeClassName="active">{content}</NavLink> }
const brand = <LinkShortHand exact to="/" className="brand" content={<img alt="דף הבית" src="//assets.yad2.co.il/yad2site/y2assets/images/header/yad2Logo.png" />} />
const listingLinks = [
    <LinkShortHand to={`${listingsPrefix}/forsale`} content={HEB_FORSALE} />,
    <LinkShortHand to={`${listingsPrefix}/rent`} content={HEB_RENT} />,
    <LinkShortHand to={`${listingsPrefix}/roommates`} content={HEB_ROOMMATES} />,
    <LinkShortHand to={`${listingsPrefix}/commercial`} content={HEB_COMMERCIAL} />
]
const userLinks = [
    <LinkShortHand to={signup} content={HEB_SIGNUP} />,
    <LinkShortHand to={addListing} content={HEB_ADD_LISTINGS} />,
    <LinkShortHand to={login} content={HEB_LOGIN} />,
    <LogoutLink />,
    // <LinkShortHand to={logout} content={HEB_LOGOUT} />,
    < LinkShortHand to={myProfile} content={HEB_MY_LISTINGS} />,
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
                    <Dropdown text={HEB_APTS} options={listingLinks} />
                </ShowAt>
            </nav>
            <nav>
                <Dropdown options={userLinks} text={HEB_PERSONAL} />
            </nav>
        </div >
    );
}




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

export default Header;