import React, { useReducer } from 'react';
import '../styles/components/ListsContainer.scss';
import ListContainer from './ListContainer/ListContainer';
import SelectSort from './ListContainer/SortBy/SelectSort';

const { HEB_MITIGATED_LISTINGS } = {
    HEB_MITIGATED_LISTINGS: "דירות מתיווך:"
}


const ListsContainer = ({ type }) => {
    return (
        <div className="ItemList__container">
            <ListContainer className="ItemList" type={type} initialFilter={{ attributeIsNull: 'listing.mitigatingCompany' }} />
            <h5>{HEB_MITIGATED_LISTINGS}</h5>
            <ListContainer className="ItemList" type={type} initialFilter={{ attributeIsntNull: 'listing.mitigatingCompany' }} />
        </div>
    )
}


export default ListsContainer;
