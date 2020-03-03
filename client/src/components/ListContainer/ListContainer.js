import React, { useContext, useEffect, useState } from 'react';
import ItemListContext from '../../contexts/ItemListContext';
import OptionsContext from '../../contexts/OptionsContext';
import { countDocs, getListings } from '../../fetch/data';
import { ItemListWithLoader } from './ItemList';
import Paging from './Paging';
import SortBy from './SortBy/SortBy';

const ListContainer = (props) => {
    const { type, initialFilter } = props;
    const { state, dispatchFilters, dispatchSorts } = useContext(OptionsContext);
    const [skip, dispatchSkip] = useState(0);
    const mergedOptions = { ...state, filters: { ...state.filters, ...initialFilter }, skip }

    const [list, updateList] = useState([]);
    const [listUpdating, toggleUpdating] = useState(true);
    const [count, updateCount] = useState(0);

    console.log(mergedOptions);

    useEffect(() => {
        toggleUpdating(true);
        getListings(type, mergedOptions)
            .then(updateList).then(() => { toggleUpdating(false) })
        dispatchSkip(0);
        countDocs(type, mergedOptions.filters).then(updateCount);
    }, [state.filters])

    useEffect(() => {
        toggleUpdating(true);
        getListings(type, mergedOptions)
            .then(updateList).then(() => { toggleUpdating(false) })
    }, [skip])

    return (
        <ItemListContext.Provider value={{
            count,
            list,
            type,
            listUpdating,
            numberOfPages: Math.ceil(count / mergedOptions.limit),
            page: mergedOptions.skip / mergedOptions.limit + 1,
            dispatchSorts,
            dispatchFilters,
            dispatchSkip: (skipBy) => { dispatchSkip((skipBy - 1) * mergedOptions.limit) }
        }}>
            <SortBy />
            <ItemListWithLoader loading={listUpdating} />
            <Paging />
        </ItemListContext.Provider>
    );
};



export default ListContainer;
