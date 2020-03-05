import React, { useReducer } from 'react';
import { initialOptions, optionsReducer } from '../reducers/optionsReducer';
import '../styles/components/ListsContainer.scss';
import ListContainer from './ListContainer/ListContainer';
import SortBy from './ListContainer/SortBy/SortBy';


const { HEB_MITIGATED_LISTINGS, HEB_NON_MITIGATED_LISTINGS } = {
    HEB_NON_MITIGATED_LISTINGS: "ללא תיווך:",
    HEB_MITIGATED_LISTINGS: "דירות מתיווך:"
}

const ListsContainer = ({ type }) => {
    const [options, dispatch] = useReducer(optionsReducer, initialOptions);
    const nonMitOptions = { ...options, filters: { ...options.filters, mitigatingCompany: "$null" } };
    const mitOptions = { ...options, filters: { ...options.filters, mitigatingCompany: "$exists" } };
    const dispatchSorts = (sorts) => { dispatch({ type: "SORTS", payload: sorts }); };
    const dispatchFilters = (filters) => { dispatch({ type: "FILTERS", payload: filters }) }
    const dispatchLimit = (limit) => { dispatch({ type: "LIMIT", payload: limit }) }


    return (
        <div className="ItemLists">
            <div className="ItemLists__sorts-and-filters">
                <SortBy {...{ dispatchSorts, dispatchFilters, dispatchLimit }}></SortBy>
            </div>
            <div className="ItemLists__lists">
                <h5>{HEB_NON_MITIGATED_LISTINGS}</h5>
                <ListContainer className="ItemList" {...{ type, options: nonMitOptions }} />
                <h5>{HEB_MITIGATED_LISTINGS}</h5>
                <ListContainer className="ItemList" {...{ type, options: mitOptions }} />
            </div>
        </div>
    )
}


export default ListsContainer;
