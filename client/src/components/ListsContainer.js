import React, { useReducer, useEffect } from 'react';
import { initialOptions, optionsReducer } from '../reducers/optionsReducer';
import '../styles/components/ListsContainer.scss';
import ListContainer from './ListContainer/ListContainer';
import SortBy from './ListContainer/SortBy/SortBy';
import Filter from '../components/forms/Filter/Filter';

const ListsContainer = ({ lists = [], type }) => {
    const [options, dispatch] = useReducer(optionsReducer, initialOptions);
    return (
        <div className="ItemLists body__content">    
            <SortBy {...{ options, dispatch }}></SortBy>
            <Filter {...{ options, dispatch, type }} />
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
