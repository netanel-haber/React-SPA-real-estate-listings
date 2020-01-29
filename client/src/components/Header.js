import React from 'react';
import { Link, Router } from 'react-router-dom';

const { sell, rent, partners, nonResi } = {
    sell: "מכירה",
    rent: "השכרה",
    partners: "דירות שותפים",
    nonResi: 'נדל"ן מסחרי'
};

const Header = () => {
    return (
        <div> ----header----                  
                   <nav>
                       <Link to="/forsale">{sell}</Link>
                   </nav>                                                       
        </div>
    );
}


export default Header;