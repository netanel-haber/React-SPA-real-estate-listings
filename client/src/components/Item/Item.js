import '../../styles/components/Item/Item.scss';

import React, { useState, useEffect } from 'react';
import MiniItem from './MiniTopBar';
import SpreadItem from './SpreadTopBar';
import Rest from './Rest'
import ItemContext from '../../contexts/ItemContext';
import { getPicUrls } from '../../s3';

const Item = ({ topLevel: { listing, level1, } }) => {
    const [isExpanded, toggleExpansion] = useState(false);
    const [urls, updateUrls] = useState([]);

    useEffect(() => {
        getPicUrls(listing.pictureKeys).then(updateUrls).catch(console.error)
    }, []);

    return (
        <ItemContext.Provider value={{
            urls,
            propertyLevel1: level1,
            listing: listing
        }}>
            <div className="Item__container" onClick={() => { toggleExpansion(!isExpanded) }}>
                {isExpanded ?
                    (<>
                        <SpreadItem />
                        <Rest />
                    </>) :
                    (<MiniItem />)
                }
            </div>
        </ItemContext.Provider>
    );
}


export default Item;