import React from 'react';
import ColumnInnerChild from './ColumnInnerChild';


const { HEB_ROOMS, HEB_FLOOR, HEB_SQ_M } = {
    HEB_ROOMS: "חדרים",
    HEB_FLOOR: "קומה",
    HEB_SQ_M: "מ\"ר",
}


const StatsColumn = ({ rooms, floor, sqMeters }) => {
    return (
        <div className="StatsColumn">
            <ColumnInnerChild title={rooms} subtitle={HEB_ROOMS} />
            <ColumnInnerChild title={floor} subtitle={HEB_FLOOR} />
            <ColumnInnerChild title={sqMeters} subtitle={HEB_SQ_M} />
        </div>
    );
}

export default StatsColumn;