import React, { useContext, useState } from 'react';
import ItemListContext from '../../contexts/ItemListContext';
import '../../styles/components/ListingPaging.scss';
import PagesContainer from './PagesContainer';
import classnames from 'classnames';

const { HEB_PREVIOUS, HEB_NEXT } = {
    HEB_PREVIOUS: "הקודם",
    HEB_NEXT: "הבא"
}

const getNumberOfPages = (count, listingsInPage) => Math.ceil(count / listingsInPage);

const ListingPaging = ({ dispatchPageUpdate, style, children }) => {
    const [page, updatePage] = useState(1);
    const { count, listingsInPage, listUpdating } = useContext(ItemListContext);
    const pageClick = (page) => {
        dispatchPageUpdate(page);
        updatePage(page);
    }
    const PrevPage = () =>
        <button disabled={!count || page === 1} onClick={() => { pageClick(page - 1) }}>{HEB_PREVIOUS}</button>
    const NextPage = () =>
        <button disabled={!count || page + 1 > getNumberOfPages(count, listingsInPage)} onClick={() => { pageClick(page + 1) }}>{HEB_NEXT}</button>;
    return (
        <div className={classnames("ListingPaging", { "inactive-style": listUpdating })} style={{ ...style, visibility: count ? "visible" : "hidden" }} >
            <NextPage />
            <PagesContainer {...{ page, pageClick }} />
            <PrevPage />
            {children}
        </div >
    );
};

export default ListingPaging;
