import React, { useEffect, useState } from 'react';
import ItemListContext from '../../contexts/ItemListContext';
import { countDocs, getListings } from '../../fetch/data';
import '../../styles/components/ItemList.scss';
import Item from '../Item/Item';
import ListingPaging from './ListingPaging';
import SortBy from './SortBy/SortBy';

const listingsInPage = 15;
const skipBy = (page) => (page - 1) * listingsInPage;
const limit = listingsInPage;


const ItemList = (props) => {
    const { type, initialFilter } = props;
    const [list, updateList] = useState([]);
    const [visibility, toggleVisibility] = useState("hidden");
    const [skip, updateSkip] = useState(0);
    const [sortBy, updateSort] = useState({ 'listing.updatedAt': -1 })
    const [filterBy, updateFilters] = useState(initialFilter);
    const [count, updateCount] = useState(0);

    useEffect(() => {
        props.setLoading(true);
        toggleVisibility("hidden")
        getListings(type, filterBy, { limit, sort: sortBy, skip })
            .then(updateList)
            .then(() => {
                toggleVisibility("visible");
                props.setLoading(false)
            })
    }, [type, sortBy, skip, filterBy])

    useEffect(() => {
        countDocs(type, filterBy).then(updateCount);
    }, [type, filterBy]);

    return (
        <ItemListContext.Provider value={{ count, listingsInPage }}>
            <SortBy />
            <div style={{ visibility }}>
                {list.map(itm => <Item type={type} topLevel={itm} key={itm._id} />)}
            </div>
            <ListingPaging dispatchPageUpdate={(page) => { updateSkip(skipBy(page)) }} />
        </ItemListContext.Provider>
    );
};



export default ItemList;
