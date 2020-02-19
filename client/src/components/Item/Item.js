import '../../styles/components/Item/Item.scss';
import React, { useState, useEffect } from 'react';
import MiniTopBar from './top/MiniTopBar';
import Rest from './rest/Rest'
import ItemContext from '../../contexts/ItemContext';
import { getPicUrls } from '../../fetch/pictureUrls';


const Item = ({ topLevel: { listing, level1, _id }, type }) => {
    const [isExpanded, toggleExpansion] = useState(false);
    const [wasExpanded, loadRest] = useState(false);
    const [urls, updateUrls] = useState([]);

    useEffect(() => {
        getPicUrls(listing.pictureKeys).then(updateUrls).catch(console.error)
    }, []);

    const onClick = () => {
        toggleExpansion(!isExpanded);
        if (!wasExpanded) loadRest(true);
    }

    return (
        <ItemContext.Provider value={{ _id, urls, level1, listing, type }}>
            <div className="Item__container" onClick={onClick}>
                <MiniTopBar display={isExpanded ? "none" : "flex"} />
                {wasExpanded && <Rest display={isExpanded ? "flex" : "none"} />}
            </div>
        </ItemContext.Provider >
    );
}


export default Item;