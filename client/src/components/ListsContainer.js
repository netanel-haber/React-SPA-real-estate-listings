import React, { useReducer } from 'react';
import { initialOptions, optionsReducer } from '../reducers/optionsReducer';
import '../styles/components/ListsContainer.scss';
import ListContainer from './ListContainer/ListContainer';
import SortBy from './ListContainer/SortBy/SortBy';


const ListsContainer = ({ lists = [] }) => {
    const [options, dispatch] = useReducer(optionsReducer, initialOptions);
    const dispatchSorts = (sorts) => { dispatch({ type: "SORTS", payload: sorts }); };
    const dispatchFilters = (filters) => { dispatch({ type: "FILTERS", payload: filters }) }
    const dispatchLimit = (limit) => { dispatch({ type: "LIMIT", payload: limit }) }
    return (
        <div className="ItemLists body__content">
            <div className="ItemLists__sorts-and-filters">
                <SortBy {...{ dispatchSorts, dispatchFilters, dispatchLimit }}></SortBy>
            </div>
            <div className="ItemLists__lists">
                {lists.map(([title, initialFilters, type], index) =>
                    <React.Fragment key={index}>
                        <h4>{title}</h4>
                        <ListContainer
                            className="ItemList"
                            type={type}
                            options={{ ...options, filters: { ...options.filters, ...initialFilters } }}
                        />
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}


export default ListsContainer;
