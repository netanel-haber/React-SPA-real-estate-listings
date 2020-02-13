import React, { useContext } from 'react';
import ItemContext from '../../contexts/ItemContext';
import ColumnInnerChild from './ColumnInnerChild';


const { HEB_ROOMS, HEB_FLOOR, HEB_SQ_M, HEB_ROOMMATES } = {
    HEB_ROOMS: "חדרים",
    HEB_FLOOR: "קומה",
    HEB_SQ_M: "מ\"ר",
    HEB_ROOMMATES: "שותפים"
}

const Stats = (props) => {
    const { level1: { rooms, floor, floorsInBuilding, sqMeters, roommates } } = useContext(ItemContext);
    return (
        <div className="StatsColumn">
            {rooms && <ColumnInnerChild title={rooms} subtitle={HEB_ROOMS} />}
            <ColumnInnerChild title={`${floor}/${floorsInBuilding}`} subtitle={HEB_FLOOR} />
            {roommates ?
                <ColumnInnerChild title={roommates} subtitle={HEB_ROOMMATES} /> :
                <ColumnInnerChild title={sqMeters} subtitle={HEB_SQ_M} />
            }
        </div>
    );
}

export default Stats;