import React, { useContext, useState } from 'react';
import '../../styles/components/ListingPaging.scss';
import PagesContainer from './PagesContainer';
import classnames from 'classnames';
import ItemListContext from '../../contexts/ItemListContext';

const { HEB_PREVIOUS, HEB_NEXT } = {
    HEB_PREVIOUS: "הקודם",
    HEB_NEXT: "הבא"
}

const getNumberOfPages = (count, listingsInPage) => Math.ceil(count / listingsInPage);

const ListingPaging = ({ style, children, page }) => {
    const { dispatchSkip } = useContext(ItemListContext);
    const { count, limit, listUpdating } = useContext(ItemListContext);
    const PrevPage = () =>
        <button disabled={!count || page === 1} onClick={() => { dispatchSkip(page - 1) }}>{HEB_PREVIOUS}</button>
    const NextPage = () =>
        <button disabled={!count || page + 1 > getNumberOfPages(count, limit)} onClick={() => { dispatchSkip(page + 1) }}>{HEB_NEXT}</button>;
    return (
        <div className={classnames("ListingPaging", { "inactive-style": listUpdating })} style={{ ...style, visibility: count ? "visible" : "hidden" }} >
            <NextPage />
            <PagesContainer {...{ page, dispatchSkip }} />
            <PrevPage />
            {children}
        </div >
    );
};

export default ListingPaging;
