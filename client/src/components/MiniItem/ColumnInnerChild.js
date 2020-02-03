import React from 'react';

const ColumnInnerChild = ({ title, subtitle }) => (
    <div>
        <div>{title}</div>
        <div className="Column__inner-child-subtitle">{subtitle}</div>
    </div>
);

export default ColumnInnerChild;