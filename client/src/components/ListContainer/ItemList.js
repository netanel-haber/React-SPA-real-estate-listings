import React, { useContext } from 'react';
import ItemListContext from '../../contexts/ItemListContext';
import Item from '../Item/Item';
import '../../styles/components/ItemList.scss';
import LoaderBeforeData from './../LoaderBeforeData';

const ItemList = ({ style, children }) => {
    const { list, type } = useContext(ItemListContext);
    return (
        <div className="ItemList" {...{ style }}>
            {list.map(itm => <Item type={type} topLevel={itm} key={itm._id} />)}
            {children}
        </div>
    );
}


const ItemListWithLoader = ({ loading }) => (
    <LoaderBeforeData loading={loading}>
        <ItemList />
    </LoaderBeforeData>
);

export { ItemListWithLoader }

export default ItemList;
