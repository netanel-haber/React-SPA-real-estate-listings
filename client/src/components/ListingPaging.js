import React, { useState, useEffect } from 'react';
import { countDocs } from '../fetch/data';
import '../styles/components/ListingPaging.scss';
import classNames from 'classnames';
import splitArr from '../utilities/splitArrToThreeByVal';

const { HEB_BEFORE, HEB_AFTER } = {
    HEB_BEFORE: "הקודם",
    HEB_AFTER: "הבא"
}
const noop = () => { };

const getPagesString = (count, listingsInPage, pagesToListAtOnce, page) => {
    let pages = [];
    let last = getNumberOfPages(count, listingsInPage);
    let pagesBeforeAndAfter = Math.floor(pagesToListAtOnce / 2);
    for (let i = page - pagesBeforeAndAfter; i < page + pagesBeforeAndAfter + 1; i++) {
        pages.push(i);
    }
    pages = pages.filter(page => ((page > 0) && (page <= last)));
    if (pages[0] > 1)
        pages.unshift(1, '...');
    if (pages[pages.length - 1] !== last)
        pages.push('...', last);

    return pages;
}

const getNumberOfPages = (count, listingsInPage) => Math.ceil(count / listingsInPage);


const ListingPaging = ({ type, filters = {}, listingsInPage = 10, updatePage: dispatchPage }) => {
    const [count, updateCount] = useState(0);
    const [page, updatePage] = useState(1);
    useEffect(() => {
        countDocs(type, filters).then(updateCount);
    }, []);
    useEffect(() => {
        dispatchPage(page);
    }, [page])

    return (
        <div className="ListingPaging">
            <button disabled={page + 1 > getNumberOfPages(count, listingsInPage)} onClick={() => { updatePage(page + 1) }}>{HEB_AFTER}</button>
            <div className="page-container">
                {getPagesString(count, listingsInPage, 7, page)
                    .map((pg, index) =>
                        (<a
                            key={index}
                            className={classNames({ theOne: pg === page, notTodayMyFriend: !Boolean(Number(pg)) })}
                            onClick={Boolean(Number(pg)) ? (() => { updatePage(pg) }) : noop} >
                            {pg}
                        </a>))}
            </div>
            <button disabled={page === 1} onClick={() => { updatePage(page - 1) }}>{HEB_BEFORE}</button>
        </div >
    );
};

export default ListingPaging;
