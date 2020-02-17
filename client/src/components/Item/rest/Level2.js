import React, { useContext } from 'react';
import RestContext from '../../../contexts/RestContext';

const { HEB_DESC } = {
    HEB_DESC: "תיאור הנכס"
}



const Level2 = () => {
    const { level2 = {} } = useContext(RestContext);
    const { desc } = level2;

    return (
        <div className="Level2">
            <div><strong>{HEB_DESC}</strong></div>
            <div>{desc}</div>
            <div className="Level2__attributes">hkjhkj</div>
        </div>
    )
};



export default Level2;