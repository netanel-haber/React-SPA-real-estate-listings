import React from 'react';
import { useParams } from 'react-router-dom';
import ListsContainer from './ListsContainer';


const ListingTypeRouter = (props) => {
    let { type } = useParams();
    return <ListsContainer type={type} />
}


export default ListingTypeRouter;
