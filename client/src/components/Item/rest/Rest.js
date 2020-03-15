import React, { useContext, useEffect, useState } from 'react';
import ItemContext from '../../../contexts/ItemContext';
import RestContext from '../../../contexts/RestContext';
import { getRest } from '../../../fetch/listings';
import '../../../styles/components/Item/Rest.scss';
import SpreadTopBar from '../top/SpreadTopBar';
import Footer from './Footer';
import RestOfData from './RestOfData';


const Rest = ({ display }) => {
    const { type, _id } = useContext(ItemContext);
    const [restOfData, updateRest] = useState({});
    useEffect(() => { getRest(type, _id).then(updateRest) }, []);
    return (
        <RestContext.Provider value={restOfData}>
            <div className="Rest" style={{ display }}>
                <SpreadTopBar />
                <RestOfData />
                <Footer />
            </div>
        </RestContext.Provider >
    );
};

export default Rest;