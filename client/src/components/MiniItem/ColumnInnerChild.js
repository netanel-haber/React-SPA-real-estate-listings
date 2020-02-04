import React from 'react';

const ColumnInnerChild = ({ title, subtitle }) => (
    <div className="text-child overflow-container">
        <div>{title}</div>
        <div className="overflow">{subtitle}</div>
    </div>
);

export default ColumnInnerChild;