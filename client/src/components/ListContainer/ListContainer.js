import React, { useEffect, useReducer, useState, useContext } from 'react';
import OptionsContext from '../../contexts/OptionsContext';
import ItemListContext from '../../contexts/ItemListContext';
import { countDocs, getListings } from '../../fetch/data';
import { ItemListWithLoader } from './ItemList';
import Paging from './Paging';
import SortBy from './SortBy/SortBy';

const limit = 3;
const optionsReducer = (prevState, { type, payload }) => {
    switch (type) {
        case "UPDATE_SORTS":
            return { ...prevState, skip: 0, sorts: payload }
        case "UPDATE_FILTERS":
            return { ...prevState, skip: 0, filters: payload }
        case "UPDATE_SKIP":
            return { ...prevState, skip: (payload - 1) * limit }
        default:
            return prevState;
    }
}

const ListContainer = (props) => {
    const { type, initialFilter } = props;
    const { state } = useContext(OptionsContext);
    const mergedState = { ...state, filters: { ...state.filters, ...initialFilter } }

    const [list, updateList] = useState([]);
    const [listUpdating, toggleUpdating] = useState(true);
    const [count, updateCount] = useState(0);

    const [optionState, dispatchOptions] = useReducer(optionsReducer, {
        sorts: { updatedAt: -1 },
        filters: initialFilter,
        skip: 0,
        limit
    });

    useEffect(() => {
        toggleUpdating(true);
        getListings(type, optionState)
            .then(updateList).then(() => { toggleUpdating(false) })
        countDocs(type, optionState.filters).then(updateCount);
    }, [type, optionState])

    return (
        <ItemListContext.Provider value={{
            count,
            list,
            type,
            listUpdating,
            numberOfPages: Math.ceil(count / limit),
            page: optionState.skip / limit + 1,
            dispatchSorts: (payload) => { dispatchOptions({ type: "UPDATE_SORTS", payload }) },
            dispatchFilters: (payload) => { dispatchOptions({ type: "UPDATE_FILTERS", payload }) },
            dispatchSkip: (payload) => { dispatchOptions({ type: "UPDATE_SKIP", payload }) }
        }}>
            <SortBy />
            <ItemListWithLoader loading={listUpdating} />
            <Paging />
        </ItemListContext.Provider>
    );
};



export default ListContainer;
