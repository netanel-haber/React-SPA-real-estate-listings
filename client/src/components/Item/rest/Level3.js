import React, { useContext, useState } from 'react';
import RestContext from '../../../contexts/RestContext';
import '../../../styles/components/Item/Level3.scss';
import translate from './Level3_translator';
import Level3Attribute from './Level3Attribute';

const { HEB_DESC, HEB_FURN_DESC } = {
    HEB_DESC: "מה יש בנכס?",
    HEB_FURN_DESC: "פירוט ריהוט"
}


const Level3 = () => {
    const { level3 = {} } = useContext(RestContext);
    const { furnitureDesc } = level3;
    return (
        <div className="Level3">
            <div><strong>{HEB_DESC}</strong></div>
            <div className="Level3__attributes">
                {Object.entries((({ _id, furnitureDesc, ...rest }) => rest)(level3))
                    .map(entry => <Level3Attribute {...translate(entry)} />)
                }
            </div>
            {furnitureDesc && (
                <>
                    <div><strong>{HEB_FURN_DESC}</strong></div>
                    <div>{furnitureDesc}</div>
                </>)
            }
        </div>
    );
};


export default Level3;