import React from 'react';
import '../styles/components/Header.scss';
import { Link } from 'react-router-dom';

const { sell, rent, roommates, commercial } = {
    sell: "מכירה",
    rent: "השכרה",
    roommates: "דירות שותפים",
    commercial: 'נדל"ן מסחרי'
};

const LinkCreater = (props) => (
<Link className="Header__Link" to={props.to}>{props.children}</Link>
);



const Header = () => {
    return (
        <div className="container">
            <nav>
                <LinkCreater to="/forsale">{sell}</LinkCreater>
                <LinkCreater to="/rent">{rent}</LinkCreater>
                <LinkCreater to="/roommates">{roommates}</LinkCreater>
                <LinkCreater to="/commercial">{commercial}</LinkCreater>
            </nav>
        </div>
    );
}


export default Header;