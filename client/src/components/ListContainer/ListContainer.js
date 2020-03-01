import React, { useEffect, useReducer, useState } from 'react';
import GridLoader from "react-spinners/GridLoader";
import ItemListContext from '../../contexts/ItemListContext';
import { countDocs, getListings } from '../../fetch/data';
import LoaderBeforeData from '../LoaderBeforeData';
import ItemList from './ItemList';
import ListingPaging from './ListingPaging';
import SortBy from './SortBy/SortBy';


const listingsInPage = 3;
const optionsReducer = (prevState, { type, payload }) => {
    switch (type) {
        case "UPDATE_SORTS":
            return { ...prevState, skip: 0, sorts: payload }
        case "UPDATE_FILTERS":
            return { ...prevState, skip: 0, filters: payload }
        case "UPDATE_SKIP":
            return { ...prevState, skip: (payload - 1) * listingsInPage }
        default:
            return prevState;
    }
}

const ListContainer = (props) => {
    const { type, initialFilter } = props;

    const [list, updateList] = useState([]);
    const [listUpdating, toggleUpdating] = useState(true);
    const [count, updateCount] = useState(0);

    const [optionState, dispatchOptions] = useReducer(optionsReducer, {
        sorts: { updatedAt: -1 },
        filters: initialFilter,
        skip: 0,
        limit: listingsInPage
    });

    useEffect(() => {
        toggleUpdating(true);
        getListings(type, optionState)
            .then(updateList).then(() => { toggleUpdating(false) })
    }, [type, optionState])

    useEffect(() => {
        countDocs(type, optionState.filters).then(updateCount);
    }, [type, optionState]);

    return (
        <ItemListContext.Provider value={{
            count,
            listingsInPage,
            list,
            type,
            listUpdating,
            optionState,
            dispatchSorts: (payload) => { dispatchOptions({ type: "UPDATE_SORTS", payload }) },
            dispatchFilters: (payload) => { dispatchOptions({ type: "UPDATE_FILTERS", payload }) },
            dispatchSkip: (payload) => { dispatchOptions({ type: "UPDATE_SKIP", payload }) }
        }}>
            <SortBy />
            <LoaderBeforeData loading={listUpdating} loaderProps={{ size: "1rem" }} type={GridLoader}>
                <ItemList />
            </LoaderBeforeData>
            <ListingPaging page={optionState.skip / listingsInPage + 1} />
        </ItemListContext.Provider>
    );
};



export default ListContainer;
