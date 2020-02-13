import React, { useState, useEffect } from 'react';
import Item from './Item/Item';
import '../styles/components/ItemList.scss';
import { getListings } from '../fetch/data';


const ItemList = ({ type }) => {
    const [list, updateList] = useState([]);
    useEffect(() => { getListings(type).then(updateList) }, []);
    return (
        <div className="ItemList__container">
            {list.map(itm => <Item type={type} topLevel={itm} key={itm._id} />)}
        </div>
    )
}


export default ItemList;
