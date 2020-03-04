import React, { useReducer } from 'react';
import '../styles/components/ListsContainer.scss';
import initialOptionsState from '../utilities/initialOptionsState';
import ListContainer from './ListContainer/ListContainer';
import SortBy from './ListContainer/SortBy/SortBy';
import dispatchOptionsContext from '../contexts/dispatchOptionsContext';

const { HEB_MITIGATED_LISTINGS } = {
    HEB_MITIGATED_LISTINGS: "דירות מתיווך:"
}

const optionsReducer = (state, { type, payload }) => {
    switch (type) {
        case "SORTS":
            return { ...state, sorts: payload }
        case "FILTERS":
            return ({
                ...state.filters.filter(filt => !(payload[filt] === "-")),
                ...payload
            });
        default:
            return state;
    }
}


const ListsContainer = ({ type }) => {
    const [options, dispatch] = useReducer(optionsReducer, initialOptionsState);
    const dispatchSorts = (sorts) => { dispatch({ type: "SORTS", payload: sorts }) };
    const dispatchFilters = (filters) => { dispatch({ type: "FILTERS", payload: filters }) }
    const nonMitOptions = { ...options, filters: { ...options.filters, mitigatingCompany: "$null" } };
    const mitOptions = { ...options, filters: { ...options.filters, mitigatingCompany: "$exists" } };
    return (
        // <dispatchOptionsContext.Provider>
        <div className="ItemLists">
            <div className="ItemLists__sorts-and-filters">
                <SortBy {...{ dispatchSorts, dispatchFilters }}></SortBy>
            </div>

            <div className="ItemLists__lists">
                <ListContainer className="ItemList" {...{ type, options: nonMitOptions }} />
                <h4>{HEB_MITIGATED_LISTINGS}</h4>
                <ListContainer className="ItemList" {...{ type, options: mitOptions }} />
            </div>
        </div>
        // </dispatchOptionsContext.Provider>
    )
}


export default ListsContainer;
