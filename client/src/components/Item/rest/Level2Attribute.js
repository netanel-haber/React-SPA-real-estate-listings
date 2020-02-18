import React from 'react';

const Level2Attribute = ({ name, value }) => name ?
    (<div className="Level2Attribute">
        {`${name}`}&nbsp;&nbsp;<strong>{`${value}`}</strong>
    </div>)
    : undefined;

export default Level2Attribute;