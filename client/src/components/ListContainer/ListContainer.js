import React, { useEffect, useState } from 'react';
import ItemListContext from '../../contexts/ItemListContext';
import { countDocs, getListings } from '../../fetch/data';
import LoaderBeforeData from '../LoaderBeforeData';
import ItemList from './ItemList';
import ListingPaging from './ListingPaging';
import SortBy from './SortBy/SortBy';
import BarLoader from "react-spinners/BarLoader";
import colors from '../../styles/base/_settings.scss';


const listingsInPage = 3;
const skipBy = (page) => (page - 1) * listingsInPage;
const limit = listingsInPage;


const ListContainer = (props) => {
    const { type, initialFilter } = props;
    const [listUpdating, toggleUpdating] = useState(true);
    const [list, updateList] = useState([]);
    const [skip, updateSkip] = useState(0);
    const [sortBy, updateSort] = useState({ 'listing.updatedAt': -1 })
    const [filterBy, updateFilters] = useState(initialFilter);
    const [count, updateCount] = useState(0);

    useEffect(() => {
        toggleUpdating(true);
        getListings(type, filterBy, { limit, sort: sortBy, skip })
            .then(updateList).then(() => { toggleUpdating(false) })
    }, [type, sortBy, skip, filterBy])

    useEffect(() => {
        countDocs(type, filterBy).then(updateCount);
    }, [type, filterBy]);
    return (
        <ItemListContext.Provider value={{ count, listingsInPage, list, type }}>
            <SortBy />
            <LoaderBeforeData loading={listUpdating} loaderProps={{ size: "2rem" }}>
                <ItemList />
            </LoaderBeforeData>
            <LoaderBeforeData loading={listUpdating} loaderProps={{ height: "0.75rem", width: "50%" }}
                type={BarLoader}>
                <ListingPaging dispatchPageUpdate={(page) => { updateSkip(skipBy(page)) }} />
            </LoaderBeforeData>
        </ItemListContext.Provider>
    );
};



export default ListContainer;
