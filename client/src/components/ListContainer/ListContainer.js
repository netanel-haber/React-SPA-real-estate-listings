import React, { useReducer, useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import ItemListContext from '../../contexts/ItemListContext';
import { countDocs, getListings } from '../../fetch/data';
import '../../styles/components/ListContainer.scss';
import toast from '../../utilities/toast';
import skipReducer from './../../reducers/skipReducer';
import { ItemListWithLoader } from './ItemList';
import Paging from './Paging';

const useApiCallEffect = (call, callback, toggleLoading, dependencies, predicate = true) => {
    useDeepCompareEffect(() => {
        if (!predicate)
            return;
        toggleLoading(true);
        call().then((res) => {
            callback(res);
            toggleLoading(false);
        }).catch(() => { toast(); toggleLoading(false) })
    }, dependencies)
}


const ListContainer = ({ options, type }) => {
    const { limit, filters } = options;
    const [skipState, updateSkip] = useReducer(skipReducer, { value: 0 });
    const [count, updateCount] = useState(0);
    const [list, updateList] = useState([]);
    const [listUpdating, toggleUpdating] = useState(true);

    useApiCallEffect(
        () => getListings(type, { ...options, skip: 0 }),
        (res) => { updateList(res); updateSkip({ type: "DONT_TRIGGER_UPDATE" }) },
        toggleUpdating,
        [options, type]);

    useApiCallEffect(
        () => getListings(type, { ...options, skip: skipState.value }),
        updateList,
        toggleUpdating,
        [skipState, type],
        skipState.should);

    useApiCallEffect(
        () => countDocs(type, filters),
        updateCount,
        toggleUpdating,
        [filters, type]);

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
