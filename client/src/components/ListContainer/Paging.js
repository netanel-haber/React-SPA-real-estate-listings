import classnames from 'classnames';
import React, { useContext } from 'react';
import ItemListContext from '../../contexts/ItemListContext';
import '../../styles/components/Paging.scss';
import PageLinks from './PageLinks';

const { HEB_PREVIOUS, HEB_NEXT, HEB_COUNT } = {
    HEB_PREVIOUS: "הקודם",
    HEB_NEXT: "הבא",
    HEB_COUNT: "סך הנכסים לפי הפילטרים שנבחרו:"
}

const Paging = () => {
    const { dispatchSkip, numberOfPages, count, listUpdating, page } = useContext(ItemListContext);
    const PrevPage = <button disabled={!count || page === 1} onClick={() => { dispatchSkip(page - 1) }}>{HEB_PREVIOUS}</button>
    const NextPage = <button disabled={!count || page + 1 > numberOfPages} onClick={() => { dispatchSkip(page + 1) }}>{HEB_NEXT}</button>;
    return (
        <div>
            <div className={classnames("ListingPaging", { "inactive-style": listUpdating })}
                style={{ visibility: count ? "visible" : "hidden" }} >
                {NextPage}
                <PageLinks />
                {PrevPage}
            </div >
            <div style={{ visibility: listUpdating ? "hidden" : "visible" }} className="ListingPaging__count">{HEB_COUNT} {count}</div>
        </div>
    );
};

export default Paging;
