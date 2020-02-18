import React, { useState, useEffect } from 'react';
import { countDocs } from '../fetch/data';

const ListingPaging = ({ updatelistCallback: cb, type }) => {
    const [count, updateCount] = useState();
    countDocs(type).then(val => {
        console.log(val);
    })
    useEffect(() => {
        countDocs(type).then(updateCount);
    }, [])

    return (
        <div className="ListingPaging">
            -
            {count}
            -
        </div>
    );
};

export default ListingPaging;
