import React, { useContext } from 'react';
import ItemContext from '../../contexts/ItemContext';
import ColumnInnerChild from './ColumnInnerChild';


const { HEB_ROOMS, HEB_FLOOR, HEB_SQ_M } = {
    HEB_ROOMS: "חדרים",
    HEB_FLOOR: "קומה",
    HEB_SQ_M: "מ\"ר",
}


const Stats = (props) => {
    const { propertyLevel1: {rooms, floor, sqMeters} } = useContext(ItemContext);
    return (
        <div className="StatsColumn">
            <ColumnInnerChild title={rooms} subtitle={HEB_ROOMS} />
            <ColumnInnerChild title={floor} subtitle={HEB_FLOOR} />
            <ColumnInnerChild title={sqMeters} subtitle={HEB_SQ_M} />
        </div>
    );
}

export default Stats;