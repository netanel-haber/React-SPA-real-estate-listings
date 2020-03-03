import React, { useContext } from 'react';
import ItemListContext from '../../contexts/ItemListContext';
import classNames from 'classnames';


const PageLinks = () => {
    const { numberOfPages, dispatchSkip, page } = useContext(ItemListContext);
    return (
        <div className="page-container">
            {getPages(numberOfPages, page)
                .map((pg, index) =>
                    (<a
                        key={index}
                        className={classNames({ theOne: pg === page, notTodayMyFriend: !Boolean(Number(pg)) })}
                        onClick={() => { if (Number(pg)) dispatchSkip(pg) }} >
                        {pg}
                    </a>))}
        </div>
    )
}

const pageOffset = 4;
function getPages(lastPage, currentPage) {
    let pages = [];
    for (let i = currentPage - pageOffset; i <= currentPage + pageOffset; i++) {
        if ((i > 0) && (i <= lastPage))
            pages.push(i);
    }
    const firstInRange = pages[0], lastInRange = pages[pages.length - 1];

    return [
        ...(firstInRange >= 2 ? (firstInRange === 2 ? [1] : [1, '...']) : []),
        ...pages,
        ...(lastInRange < lastPage ? (lastInRange + 1 < lastPage ? ['...', lastPage] : [lastPage]) : [])
    ]
}

export default PageLinks;


