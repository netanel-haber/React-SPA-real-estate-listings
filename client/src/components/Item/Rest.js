import '../../styles/components/Item/Rest.scss';
import React, { useEffect, useContext, useState } from 'react';
import ItemContext from '../../contexts/ItemContext';
import { getRest } from '../../fetch/data';



const Rest = ({ display }) => {
    const { type, _id } = useContext(ItemContext);
    const [bottomLevel, updateBottomLevel] = useState({});
    useEffect(() => { getRest(type, _id).then(updateBottomLevel) }, [])
    
    return (
        <div className="rest">
            {JSON.stringify(bottomLevel)}
        </div>
    );
};

export default Rest;