import React from 'react';
import '../styles/components/Header.scss';
import { NavLink } from 'react-router-dom';


const { sell, rent, roommates, commercial, login } = {
    sell: "מכירה",
    rent: "השכרה",
    roommates: "דירות שותפים",
    commercial: 'נדל"ן מסחרי',
    login: 'אזור אישי'
};

const LinkShorthand = ({ to, text, className}) => (
    <NavLink
        activeClassName="Header__Link-Selected"
        className={`Header__Link ${className}`}
        to={to}>{text}
    </NavLink>
);



const Header = () => {
    return (
        <div className="container">
            <div className="child">
                <nav>
                    <LinkShorthand to="/forsale" text={sell} />
                    <LinkShorthand to="/rent" text={rent} />
                    <LinkShorthand to="/roommates" text={roommates} />
                    <LinkShorthand to="/commercial" text={commercial} />
                </nav>
            </div>
            <div className="child">
                <LinkShorthand to="/personal" text={login + " 👤"}/>
            </div>
        </div>

    );
}


export default Header;