import React from 'react';

const Level2Attribute = ({ name, value }) => name ?
    (<div>
        {`${name}`} <strong>{`${value}`}</strong>
    </div>)
    : undefined;

export default Level2Attribute;