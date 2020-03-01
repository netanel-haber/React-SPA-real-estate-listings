import React, { useEffect, useState } from 'react';
import BarLoader from "react-spinners/BarLoader";
import GridLoader from "react-spinners/GridLoader";
import ItemListContext from '../../contexts/ItemListContext';
import { countDocs, getListings } from '../../fetch/data';
import LoaderBeforeData from '../LoaderBeforeData';
import ItemList from './ItemList';
import ListingPaging from './ListingPaging';
import SortBy from './SortBy/SortBy';


const skipBy = (page, listingsInPage) => (page - 1) * listingsInPage;


const ListContainer = (props) => {
    const { type, initialFilter, listingsInPage = 3, limit = listingsInPage } = props;
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
        <ItemListContext.Provider value={{ count, listingsInPage, list, type, listUpdating }}>
            <SortBy />
            <LoaderBeforeData loading={listUpdating} loaderProps={{ size: "1rem" }}
                type={GridLoader}>
                <ItemList />
            </LoaderBeforeData>
            <ListingPaging dispatchPageUpdate={(page) => { updateSkip(skipBy(page, listingsInPage)) }} />
        </ItemListContext.Provider>
    );
};



export default ListContainer;
