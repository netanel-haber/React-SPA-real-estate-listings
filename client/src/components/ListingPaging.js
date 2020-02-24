import React, { useState, useEffect, useContext } from 'react';
import { countDocs } from '../fetch/data';
import '../styles/components/ListingPaging';





const ListingPaging = ({ type, listingsInPage = 10 }) => {
    const [count, updateCount] = useState(0);
    useEffect(() => {
        countDocs(type).then(updateCount);
    }, []);
    return (
        <div className="ListingPaging">
            1 2 3 4 5 6 7 8 ...{Math.ceil(count / listingsInPage)}
        </div>
    );
};

export default ListingPaging;
