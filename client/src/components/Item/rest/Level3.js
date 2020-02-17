import React, { useContext } from 'react';
import RestContext from '../../../contexts/RestContext';
import '../../../styles/components/Item/Level3.scss';
import translate from './Level3_translator';

const { HEB_DESC } = {
    HEB_DESC: "מה יש בנכס?"
}



const Level3 = () => {
    const { level3 = {} } = useContext(RestContext);
    return (
        <div className="Level3">
            <div><strong>{HEB_DESC}</strong></div>
            <div className="Level3__attributes">
                {Object.keys((({ _id, ...rest }) => rest)(level3))
                    .map(key => {
                        const { translation, faded, picUrl } = translate(key, level3[key]);
                        return (translation ?
                            (<div className="Level3__attribute">
                                <img className={faded && "faded-pic"} height="24px" width="24px" src={picUrl}></img>
                                <div className={faded && "faded-text"}>{translation}</div>
                            </div>) : undefined
                        )
                    })
                }
            </div>
        </div>
    );
};


export default Level3;