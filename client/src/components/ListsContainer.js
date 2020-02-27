import React from 'react';
import '../styles/components/ItemList.scss';
import ItemList from './ItemList/ListContainer';
import WithLoader from './WithLoader';


const { HEB_MITIGATED_LISTINGS } = {
    HEB_MITIGATED_LISTINGS: "דירות מתיווך:"
}


const ListsContainer = ({ type }) => {
    return (
        <div className="ItemList__container">
            <WithLoader loaderProps={{ size: "3rem" }}>
                <ItemList className="ItemList" type={type} initialFilter={{ attributeIsNull: 'listing.mitigatingCompany' }} />
            </WithLoader>
            <h5>{HEB_MITIGATED_LISTINGS}</h5>
            <WithLoader loaderProps={{ size: "3rem" }}>
                <ItemList className="ItemList" type={type} initialFilter={{ attributeIsntNull: 'listing.mitigatingCompany' }} />
            </WithLoader>
        </div>
    )
}


export default ListsContainer;
