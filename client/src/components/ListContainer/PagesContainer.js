import React, { useContext } from 'react';
import ItemListContext from '../../contexts/ItemListContext';
import classNames from 'classnames';


function getNumberOfPages(count, listingsInPage) { return Math.ceil(count / listingsInPage) };


const PagesContainer = ({ page, pageClick }) => {
    const { count, listingsInPage } = useContext(ItemListContext);
    return (
        <div className="page-container">
            {getPagesString(count, listingsInPage, page)
                .map((pg, index) =>
                    (<a
                        key={index}
                        className={classNames({ theOne: pg === page, notTodayMyFriend: !Boolean(Number(pg)) })}
                        onClick={() => { if (Number(pg)) pageClick(pg) }} >
                        {pg}
                    </a>))}
        </div>
    )
}



function getPagesString(count, listingsInPage, page, pagesToListAtOnce = 7) {
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

export default PagesContainer;

