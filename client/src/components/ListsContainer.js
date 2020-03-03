import React, { useState } from 'react';
import '../styles/components/ListsContainer.scss';
import ListContainer from './ListContainer/ListContainer';
import OptionsContext from '../contexts/OptionsContext';


const { HEB_MITIGATED_LISTINGS } = {
    HEB_MITIGATED_LISTINGS: "דירות מתיווך:"
}



const ListsContainer = ({ type }) => {
    const [state, dispatch] = useState({
        sorts: { updatedAt: -1 },
        filters: {},
        limit: 3
    });
    const dispatchSort = (sorts) => { dispatch({ ...state, sorts }) };
    const dispatchFilters = (filters) => { dispatch({ ...state, filters: { ...state.filters, ...filters } }) }
    return (
        <OptionsContext.Provider value={state, dispatchSort, dispatchFilters}>
            <div className="ItemList__container">
                <ListContainer className="ItemList" type={type} initialFilter={{ attributeIsNull: 'listing.mitigatingCompany' }} />
                <h5>{HEB_MITIGATED_LISTINGS}</h5>
                <ListContainer className="ItemList" type={type} initialFilter={{ attributeIsntNull: 'listing.mitigatingCompany' }} />
            </div>
        </OptionsContext.Provider>

    )
}


export default ListsContainer;
