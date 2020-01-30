import React from 'react';
import '../styles/components/Header.scss';
import { NavLink } from 'react-router-dom';

const { sell, rent, roommates, commercial } = {
    sell: "מכירה",
    rent: "השכרה",
    roommates: "דירות שותפים",
    commercial: 'נדל"ן מסחרי'
};

const LinkShorthand = ({ to, text }) => (
    <NavLink
        activeClassName="Header__Link-Selected"
        className="Header__Link"
        to={to}>{text}
    </NavLink>
);



const Header = () => {
    return (
        <div className="container">
            <div >
                <nav>
                    <LinkShorthand to="/forsale" text={sell} />
                    <LinkShorthand to="/rent" text={rent} />
                    <LinkShorthand to="/roommates" text={roommates} />
                    <LinkShorthand to="/commercial" text={commercial} />
                </nav>
            </div>
            <div>
                
            </div>
        </div>

    );
}


export default Header;