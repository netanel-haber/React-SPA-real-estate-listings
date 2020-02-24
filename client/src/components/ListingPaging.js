import React, { useState, useEffect } from 'react';
import { countDocs } from '../fetch/data';
import '../styles/components/ListingPaging.scss';

const PageLink = (text, dispatch) => {

}



const getPagesString = (count, listingsInPage, pagesToListAtOnce = 8) => {
    let pages = [];
    let max = Math.ceil(count / listingsInPage);
    let i = 1;
    for (; (i <= pagesToListAtOnce) && (i <= max); pages.push(i++)) { }
    if (i <= max)
        pages.push('...', max);
    return pages;
}



const ListingPaging = ({ type, listingsInPage = 10, dispatchPage }) => {
    const [count, updateCount] = useState(0);
    useEffect(() => {
        countDocs(type).then(updateCount);
    }, []);
    return (
        <div className="ListingPaging">
            {getPagesString(count, listingsInPage).map((page, index) => (
                <a
                    key={index}
                    className="ListingPaging__page"
                >
                    {page}
                </a>
            ))}
        </div>
    );
};

export default ListingPaging;
