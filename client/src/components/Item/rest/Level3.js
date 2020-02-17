import React, { useContext } from 'react';
import RestContext from '../../../contexts/RestContext';

const Level3 = () => {
    const { level3 } = useContext(RestContext);
    return (
        <div className="level3">
            

            {/* {JSON.stringify(level3)} */}
        </div>
    );
};


export default Level3;