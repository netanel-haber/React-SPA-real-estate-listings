import React, { useContext } from 'react';
import RestContext from '../../../contexts/RestContext';
import translator from './level2_hebrew_map';
import '../../../styles/components/Item/Level2.scss';

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
                {Object.keys((({ desc, _id, ...rest }) => rest)(level2))
                    .map(translator)
                    .map(({ key, value }) => key ?
                        (
                            <div>
                                {`${key}:`} <strong>{`${value}`}</strong>
                            </div>
                        ) : undefined
                    )}
            </div>
        </div>
    )
};



export default Level2;