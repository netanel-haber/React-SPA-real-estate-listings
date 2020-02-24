import React, { useEffect, useState } from 'react';
import ItemListContext from '../contexts/ItemListContext';
import { getListings } from '../fetch/data';
import '../styles/components/ItemList.scss';
import Item from './Item/Item';
import ListingPaging from './ListingPaging';


const listingsInPage = 10;

const ItemList = ({ type, filters }) => {
    const [skipValue, updateSkip] = useState(0);
    const [list, updateList] = useState([]);
    useEffect(() => {
        getListings(
            type,
            filters,
            { limit: listingsInPage, sort: { date: 1 }, skip: skipValue })
            .then(updateList)
    }, []);
    return (
        <div>
            {list.map(itm => <Item type={type} topLevel={itm} key={itm._id} />)}
            <ListingPaging type={type} listingsInPage={listingsInPage} />
        </div>
    );
};

export default ItemList;
