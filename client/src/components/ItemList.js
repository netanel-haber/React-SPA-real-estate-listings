import React, { useEffect, useState } from 'react';
import ItemListContext from '../contexts/ItemListContext';
import { getListings } from '../fetch/data';
import '../styles/components/ItemList.scss';
import Item from './Item/Item';
import ListingPaging from './ListingPaging';


const ItemList = ({ type, predicate }) => {
    const [list, updateList] = useState([]);
    useEffect(() => { getListings(type, predicate).then(updateList) }, []);


    return (
        <ItemListContext.Provider>
            <div>
                {list.map(itm => <Item type={type} topLevel={itm} key={itm._id} />)}
                <ListingPaging type={type} listingsInPage={9} />
            </div>
        </ItemListContext.Provider>
    );
};

export default ItemList;
