import React, { useEffect, useState } from 'react';
import ItemContext from '../../contexts/ItemContext';
import { getPicUrls } from '../../fetch/pictureUrls';
import '../../styles/components/Item/Item.scss';
import useLoadOnceThenToggle from './../../hooks/useLoadOnceThenToggle';
import Rest from './rest/Rest';
import MiniTopBar from './top/MiniTopBar';


const Item = ({ type, topLevel: { listing, level1, _id } }) => {
    const [wasExpanded, isExpanded, toggle] = useLoadOnceThenToggle();
    const [urls, updateUrls] = useState([]);

    useEffect(() => {
        getPicUrls(listing.pictureKeys).then(updateUrls).catch(console.error)
    }, []);

    const contextValue = { _id, urls, level1, listing, type };
    return (
        <ItemContext.Provider value={contextValue}>
            <div className="Item__container" onClick={toggle}>
                <MiniTopBar display={isExpanded ? "none" : "flex"} />
                {wasExpanded && <Rest display={isExpanded ? "flex" : "none"} />}
            </div>
        </ItemContext.Provider >
    );
}


export default Item;