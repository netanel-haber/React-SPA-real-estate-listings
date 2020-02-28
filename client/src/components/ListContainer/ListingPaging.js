import React, { useContext, useState } from 'react';
import ItemListContext from '../../contexts/ItemListContext';
import '../../styles/components/ListingPaging.scss';
import PagesContainer from './PagesContainer';
import Loader from "react-spinners/BarLoader";
import colors from '../../styles/base/_settings.scss';
import classNames from 'classnames';

const { HEB_PREVIOUS, HEB_NEXT } = {
    HEB_PREVIOUS: "הקודם",
    HEB_NEXT: "הבא"
}

const getNumberOfPages = (count, listingsInPage) => Math.ceil(count / listingsInPage);

const ListingPaging = ({ dispatchPageUpdate }) => {
    const [page, updatePage] = useState(1);
    const { count, listingsInPage } = useContext(ItemListContext);
    const pageClick = (page) => {
        dispatchPageUpdate(page);
        updatePage(page);
    }
    const PrevPage = () => (<button disabled={page === 1} onClick={() => { pageClick(page - 1) }}>{HEB_PREVIOUS}</button>)
    const NextPage = () => (<button disabled={page + 1 > getNumberOfPages(count, listingsInPage)} onClick={() => { pageClick(page + 1) }}>{HEB_NEXT}</button>);
    return (
        <div className="ListingPaging" style={{ justifyContent: count ? "space-between" : "center" }} >
            {count
                ? (<>
                    <NextPage />
                    <PagesContainer {...{ page, pageClick }} />
                    <PrevPage />
                </>)
                : <Loader color={colors.yad2Orange} height="0.75rem" width="75%" loading />}
        </div >
    );
};

export default ListingPaging;