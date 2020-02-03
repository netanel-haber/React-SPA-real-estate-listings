import React from 'react';

const ColumnInnerChild = ({ title, subtitle }) => (
    <div className="child">
        <div>{title}</div>
        <div className="overflow">{subtitle}</div>
    </div>
);

export default ColumnInnerChild;