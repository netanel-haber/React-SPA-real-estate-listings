import React, { useState, useReducer, useEffect } from 'react';
import ItemListContext from '../../contexts/ItemListContext';
import { countDocs, getListings } from '../../fetch/data';
import { useApiCallEffectDeepCompare } from '../../hooks/useApiCallEffect';
import '../../styles/components/ListContainer.scss';
import { ItemListWithLoader } from './ItemList';
import Paging from './Paging';
import skipReducer from './../../reducers/skipReducer';


const ListContainer = ({ options, type }) => {
    const { limit, filters } = options;
    const [skipState, updateSkip] = useReducer(skipReducer, { value: 0 });
    const [count, updateCount] = useState(0);
    const [list, updateList] = useState([]);
    const [listUpdating, toggleUpdating] = useState(true);


    useApiCallEffectDeepCompare(
        (sig) => getListings(type, { ...options, skip: 0 }, sig),
        (res) => { updateList(res).then(updateSkip({ type: "DONT_TRIGGER_UPDATE" }))  },
        [options, type],
        toggleUpdating);
    useApiCallEffectDeepCompare(
        async (sig) => skipState.should && getListings(type, { ...options, skip: skipState.value }, sig),
        updateList,
        [skipState, options],
        toggleUpdating);
    useApiCallEffectDeepCompare((sig) => countDocs(type, filters, sig), updateCount, [filters, type]);

    return (
        <ItemListContext.Provider value={{
            count, list, type, listUpdating,
            numberOfPages: Math.ceil(count / limit),
            page: skipState.value / limit + 1,
            dispatchSkip: (skipBy) => {
                updateSkip({ type: "TRIGGER_UPDATE", value: (skipBy - 1) * limit })
            }
        }}>
            <div className="ListContainer">
                <ItemListWithLoader loading={listUpdating} />
                <Paging />
            </div>
        </ItemListContext.Provider >
    );
};



export default ListContainer;
