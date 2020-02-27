import React, { useContext } from 'react';
import ItemListContext from '../../contexts/ItemListContext';
import Item from '../Item/Item';
import '../../styles/components/ItemList.scss';

const ItemList = ({ style, children }) => {
    const { list, type } = useContext(ItemListContext);
    return (
        <div className="ItemList" {...{ style }}>
            {list.map(itm => <Item type={type} topLevel={itm} key={itm._id} />)}
            {children}
        </div>
    );
}

export default ItemList;
