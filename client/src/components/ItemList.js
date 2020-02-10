import React from 'react';
import Item from './Item/Item';
import prop from '../mockAptForTestingItem';
import '../styles/components/ItemList.scss';

const ItemList = () => (
    <div className="ItemList__container">
        ItemList <br></br>
        ----
        <Item apt={prop} />
    </div>
);


export default ItemList;
