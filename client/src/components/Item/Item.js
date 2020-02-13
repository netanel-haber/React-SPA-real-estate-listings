import '../../styles/components/Item/Item.scss';

import React, { useState, useEffect } from 'react';
import MiniTopBar from './MiniTopBar';
import SpreadTopBar from './SpreadTopBar';
import Rest from './Rest'
import ItemContext from '../../contexts/ItemContext';
import { getPicUrls } from '../../picturesAPI';


const Item = ({ topLevel: { listing, level1, _id }, type }) => {
    const [isExpanded, toggleExpansion] = useState(false);
    // const [onceExpanded, t] = useState(false);
    const [urls, updateUrls] = useState([]);

    useEffect(() => {
        getPicUrls(listing.pictureKeys).then(updateUrls).catch(console.error)
    }, []);
    return (
        <ItemContext.Provider value={{
            _id,
            urls,
            level1,
            listing,
            type
        }}>
            <div className="Item__container" onClick={() => { toggleExpansion(!isExpanded) }}>
                <MiniTopBar display={isExpanded ? "none" : "flex"} />
                <SpreadTopBar display={isExpanded ? "flex" : "none"} />
                <Rest display={isExpanded ? "flex" : "none"} />
            </div>
        </ItemContext.Provider >
    );
}


export default Item;