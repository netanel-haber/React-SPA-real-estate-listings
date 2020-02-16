import '../../../styles/components/Item/Rest.scss';
import React, { useEffect, useContext, useState } from 'react';
import ItemContext from '../../../contexts/ItemContext';
import RestContext from '../../../contexts/RestContext';
import { getRest } from '../../../fetch/data';
import SpreadTopBar from '../top/SpreadTopBar';
import Footer from './Footer';
import RestOfData from './RestOfData';


const Rest = ({ display }) => {
    const { type, _id } = useContext(ItemContext);
    const [restOfData, updateRest] = useState({});
    useEffect(() => { getRest(type, _id).then(updateRest) }, [])
    const { level2, level3 } = restOfData;
    return (
        <RestContext.Provider value={{ level2, level3 }}>
            <div className="Rest" style={{ display }}>
                <SpreadTopBar />
                <RestOfData />
                <Footer />
            </div>
        </RestContext.Provider >
    );
};

export default Rest;