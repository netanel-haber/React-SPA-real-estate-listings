import React, { useContext } from 'react';
import RestContext from '../../../contexts/RestContext';
import translate from './Level2_translator';
import '../../../styles/components/Item/Level2.scss';
import Level2Attribute from './Level2Attribute';

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
            <div className="Level2__attributes">
                {Object.entries((({ desc, _id, ...rest }) => rest)(level2))
                    .map((entry,index) => <Level2Attribute key={index} {...translate(entry)} />)}
            </div>
        </div>
    )
};



export default Level2;