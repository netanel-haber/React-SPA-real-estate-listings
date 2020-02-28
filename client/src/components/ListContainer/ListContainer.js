import React, { useEffect, useState } from 'react';
import ItemListContext from '../../contexts/ItemListContext';
import { countDocs, getListings } from '../../fetch/data';
import WithLoader from '../LoaderBeforeData';
import ItemList from './ItemList';
import ListingPaging from './ListingPaging';
import SortBy from './SortBy/SortBy';


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
            <WithLoader loading={listUpdating} loaderProps={{ size: "2rem" }}>
                <ItemList />
            </WithLoader>
            <ListingPaging dispatchPageUpdate={(page) => { updateSkip(skipBy(page)) }} />
        </ItemListContext.Provider>
    );
};



export default ListContainer;
