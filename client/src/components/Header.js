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
                <LinkShorthand to="/personal" text={personal + " 👤"} className="vendor"/>
                <LinkShorthand to="/add-listing" text={addListing} className="vendor"/>
            </div>
        </div>

    );
}


export default Header;