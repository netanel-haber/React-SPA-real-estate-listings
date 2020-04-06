import React from 'react';
import { useParams } from 'react-router-dom';
import ListsContainer from './ListsContainer';
import filterShortcuts from '../utilities/dbFilterShortcuts';

const { $exists, $null } = filterShortcuts;


const { HEB_MITIGATED_LISTINGS, HEB_NON_MITIGATED_LISTINGS } = {
    HEB_NON_MITIGATED_LISTINGS: "ללא תיווך:",
    HEB_MITIGATED_LISTINGS: "דירות מתיווך:"
}



const ListingRenderer = () => {
    let { type } = useParams();
    return <ListsContainer type={type} lists={[
        [HEB_NON_MITIGATED_LISTINGS, { mitigatingCompany: $null }, type],
        [HEB_MITIGATED_LISTINGS, { mitigatingCompany: $exists }, type]
    ]} />
}


export default ListingRenderer;
