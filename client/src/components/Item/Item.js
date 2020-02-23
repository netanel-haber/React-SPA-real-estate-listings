import '../../styles/components/Item/Item.scss';
import React, { useState, useEffect } from 'react';
import MiniTopBar from './top/MiniTopBar';
import Rest from './rest/Rest'
import ItemContext from '../../contexts/ItemContext';
import { getPicUrls } from '../../fetch/pictureUrls';
import useLoadOnceThenToggle from './../../hooks/useLoadOnceThenToggle';


const Item = ({ topLevel: { listing, level1, _id }, type }) => {
    const [wasExpanded, isExpanded, toggle] = useLoadOnceThenToggle();
    const [urls, updateUrls] = useState([]);
    useEffect(() => {
        getPicUrls(listing.pictureKeys).then(updateUrls).catch(console.error)
    }, []);
    return (
        <ItemContext.Provider value={{ _id, urls, level1, listing, type }}>
            <div className="Item__container" onClick={toggle}>
                <MiniTopBar display={isExpanded ? "none" : "flex"} />
                {wasExpanded && <Rest display={isExpanded ? "flex" : "none"} />}
            </div>
        </ItemContext.Provider >
    );
}


export default Item;