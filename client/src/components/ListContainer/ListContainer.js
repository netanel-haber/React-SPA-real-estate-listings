import React, { useState } from 'react';
import ItemListContext from '../../contexts/ItemListContext';
import { countDocs, getListings } from '../../fetch/data';
import { useApiCallEffectDeepCompare } from '../../hooks/useApiCallEffect';
import '../../styles/components/ListContainer.scss';
import { ItemListWithLoader } from './ItemList';
import Paging from './Paging';


const ListContainer = ({ options, type }) => {
    const { limit, filters } = options;
    const [skip, updateSkip] = useState(0);
    const [count, updateCount] = useState(0);
    const [list, updateList] = useState([]);
    const [listUpdating, toggleUpdating] = useState(true);

    useApiCallEffectDeepCompare((sig) => getListings(type, { ...options, skip: 0 }, sig), (res) => {
        updateList(res);
        updateSkip(0);
    }, [options, type], toggleUpdating);
    useApiCallEffectDeepCompare((sig) => getListings(type, { ...options, skip }), updateList, [skip, options], toggleUpdating);
    useApiCallEffectDeepCompare((sig) => countDocs(type, filters, sig), updateCount, [filters, type]);

    return (
        <ItemListContext.Provider value={{
            count, list, type, listUpdating,
            numberOfPages: Math.ceil(count / limit),
            page: skip / limit + 1,
            dispatchSkip: (skipBy) => { updateSkip(((skipBy - 1) * limit)) }
        }}>
            <div className="ListContainer">
                <ItemListWithLoader loading={listUpdating} />
                <Paging />
            </div>
        </ItemListContext.Provider>
    );
};



export default ListContainer;
