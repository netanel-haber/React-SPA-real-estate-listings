import React from 'react';

const ColumnInnerChild = ({ title, subtitle }) => (
    <div className="text-child overflow-container">
        <div>{title}</div>
        <div className="overflow"><span>{subtitle}</span></div>
    </div>
);

export default ColumnInnerChild;


