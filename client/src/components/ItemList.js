import React, { useEffect, useState } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import { getListings } from '../fetch/data';
import '../styles/components/ItemList.scss';
import Item from './Item/Item';
import ListingPaging from './ListingPaging';
import SortBy from './SortBy/SortBy';


const listingsInPage = 10;
const skipBy = (page) => (page - 1) * listingsInPage;
const limit = listingsInPage;


const ItemList = ({ type, filters }) => {
    const [list, updateList] = useState([]);
    const [skip, updateSkip] = useState(0);
    const [sort, updateSort] = useState({ 'listing.updatedAt': -1 })
    const [filter, updateFilters] = useState(filters);

    useEffect(() => {
        getListings(type, filter, { limit, sort, skip }).then(updateList)
    }, [sort, skip, filter])

    return (
        <div>
            <PulseLoader size="3rem" loading={!list.length}></PulseLoader>
            <span style={{ visibility: list.length ? "visible" : "hidden" }}>
                <SortBy />
                {list.map(itm => <Item type={type} topLevel={itm} key={itm._id} />)}
                <ListingPaging
                    filters={filters}
                    updatePage={(page) => { updateSkip(skipBy(page)) }}
                    type={type}
                    listingsInPage={listingsInPage} />
            </span>
        </div>
    );
};

export default ItemList;
