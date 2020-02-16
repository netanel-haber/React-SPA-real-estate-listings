import '../../styles/components/Item/Rest.scss';
import React, { useEffect, useContext, useState } from 'react';
import ItemContext from '../../contexts/ItemContext';
import { getRest } from '../../fetch/data';
import SpreadTopBar from './top/SpreadTopBar';



const Rest = ({ display }) => {
    const { type, _id } = useContext(ItemContext);
    const [restOfData, updateRest] = useState({});

    useEffect(() => { getRest(type, _id).then(updateRest) }, [])
    return (
        <div className="rest" style={{ display }}>
            <SpreadTopBar />
            <div>
                {JSON.stringify(restOfData)}
            </div>
        </div>
    );
};

export default Rest;