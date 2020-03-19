import React from 'react';
import '../../styles/components/Header.scss';
import { HideAt, ShowAt } from 'react-with-breakpoints';
import Dropdown from './Dropdown';
import LinkShorthand from './LinkShorthand';
import LogoutLink from './LogoutLink';
import { HEB } from './heb';
import { paths } from '../pages/paths';
const { login, signup, myProfile, addListing, listingsPrefix } = paths;
const { HEB_FORSALE, HEB_RENT, HEB_ROOMMATES, HEB_COMMERCIAL, HEB_PERSONAL, HEB_ADD_LISTINGS, HEB_APTS, HEB_SIGNUP, HEB_LOGIN, HEB_MY_LISTINGS } = HEB;



const brand = <LinkShorthand exact to="/" className="brand" content={<img alt="דף הבית" src="//assets.yad2.co.il/yad2site/y2assets/images/header/yad2Logo.png" />} />
const listingLinks = [
    <LinkShorthand to={`${listingsPrefix}/forsale`} content={HEB_FORSALE} />,
    <LinkShorthand to={`${listingsPrefix}/rent`} content={HEB_RENT} />,
    <LinkShorthand to={`${listingsPrefix}/roommates`} content={HEB_ROOMMATES} />,
    <LinkShorthand to={`${listingsPrefix}/commercial`} content={HEB_COMMERCIAL} />
]
const userLinks = [
    <LinkShorthand to={signup} content={HEB_SIGNUP} />,
    <LinkShorthand to={addListing} content={HEB_ADD_LISTINGS} />,
    <LinkShorthand to={login} content={HEB_LOGIN} />,
    <LogoutLink />,
    // <LinkShortHand to={logout} content={HEB_LOGOUT} />,
    < LinkShorthand to={myProfile} content={HEB_MY_LISTINGS} />,
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



export default Header;