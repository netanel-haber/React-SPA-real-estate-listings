import React, { useState, useEffect } from 'react';
import Item from './Item/Item';
import '../styles/components/ItemList.scss';


const ItemList = ({ type }) => {
    const [list, updateList] = useState([]);
    useEffect(() => {
        console.time(type);
        fetch(`/api/mongo/${type}`).then(res => res.json()).then(items => { updateList(items); console.timeEnd(type) });
    }, []);
    return (
        <div className="ItemList__container">
            {list.map(itm => <Item topLevel={itm} key={itm._id} />)}
        </div>
    )
}


export default ItemList;
