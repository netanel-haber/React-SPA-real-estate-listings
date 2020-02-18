import React, { useState, useEffect } from 'react';
import Item from './Item/Item';
import '../styles/components/ItemList.scss';
import { getListings } from '../fetch/data';

import splitToMitigatedAndNot from '../utilities/splitArrByPredicate';
const criterion = ({ listing }) => Boolean(listing.mitigatingCompany);

const { HEB_MITIGATED_LISTINGS } = {
    HEB_MITIGATED_LISTINGS: "דירות מתיווך:"
}


const ItemList = ({ type }) => {
    const [list, updateList] = useState([]);
    useEffect(() => { getListings(type).then(updateList) }, []);
    const { 0: nonMitigated, 1: mitigated } = splitToMitigatedAndNot(list, criterion);
    return (
        <div className="ItemList__container">
            {nonMitigated.map(itm => <Item type={type} topLevel={itm} key={itm._id} />)}
            <h5>{HEB_MITIGATED_LISTINGS}</h5>
            {mitigated.map(itm => <Item type={type} topLevel={itm} key={itm._id} />)}
        </div>
    )
}


export default ItemList;
