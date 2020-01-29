import React from 'react';
import { Link } from 'react-router-dom';

const { sell, rent, partners, nonResi } = {
    sell: "מכירה",
    rent: "השכרה",
    partners: "דירות שותפים",
    nonResi: 'נדל"ן מסחרי'
};

const Header = () => {
    return (
        <div>
            <Link>{sell}</Link>
            {sell} {rent} {partners} {nonResi}
        </div>
    );
}


export default Header;