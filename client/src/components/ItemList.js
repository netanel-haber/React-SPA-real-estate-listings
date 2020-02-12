import React, { useState, useEffect } from 'react';
import Item from './Item/Item';
import prop from '../mockAptForTestingItem';
import '../styles/components/ItemList.scss';

const ItemList = () => {
    const [list, updateList] = useState([]);
    useEffect(() => {
        fetch('/api/mongo/forsale').then(res => res.json()).then(items => { updateList(items) });
    }, []);
    return (
        <div className="ItemList__container">
            {list.map(itm => <Item apt={itm} />)}
        </div>
    )
}


export default ItemList;
