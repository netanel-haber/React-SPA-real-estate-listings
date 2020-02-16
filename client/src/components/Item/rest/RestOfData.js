import React from 'react';
import Level2 from './Level2';
import Level3 from './Level3';
import '../../../styles/components/Item/RestOfData.scss';

const RestOfData = () => {
    return (
        <div className="Item-level2-3">
            <div className="Item-level2-3-data">
                <Level2 />
                <Level3 />
                <div>
                    {/* {JSON.stringify(restOfData)} */}
                </div>
            </div>
            <div className="Item-level2-3-ads">njnjnjn</div>
        </div>
    )
}

export default RestOfData;
