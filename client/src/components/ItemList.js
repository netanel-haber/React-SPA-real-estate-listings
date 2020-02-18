import React, { useEffect, useState } from 'react';
import { getListings } from '../fetch/data';
import '../styles/components/ItemList.scss';
import ListingPaging from './ListingPaging';
import Item from './Item/Item';

const ItemList = ({ type, predicate }) => {
    const [list, updateList] = useState([]);
    useEffect(() => { getListings(type, predicate).then(updateList) }, []);
    return (
        <div>
            {list.map(itm => <Item type={type} topLevel={itm} key={itm._id} />)}
            <ListingPaging updatelistCallback={updateList} type={type} />
        </div>
    );
};

export default ItemList;
