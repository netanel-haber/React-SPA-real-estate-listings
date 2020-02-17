import React from 'react';

const Level3Attribute = ({ picUrl, translation, faded }) =>
    translation ? (
        <div className="Level3__attribute">
            <img
                alt=""
                className={faded && "faded-pic"}
                height="20px"
                width="20px"
                src={picUrl}>
            </img>
            <div className={faded && "faded-text"}>{translation}</div>
        </div>
    ) : undefined;

export default Level3Attribute;
