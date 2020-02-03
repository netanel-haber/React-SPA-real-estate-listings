import React from 'react';
import '../../styles/components/MiniItem.scss';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import MiddleColumn from './MiddleColumn';

const MiniItem = (props) => {
    const {
        price, type, rooms,
        address: { municipality, areaId, street, number, apt },
        picKeys, floor, totalPropertyFloors, sqMeters,
        mitigator, updatedAt
    } = props;
    return (
        <div className="MiniItem__container">
            <RightColumn />
            <MiddleColumn rooms={rooms} floor={floor} sqMeters={sqMeters} />
            <LeftColumn price={price} mitigator={mitigator} updatedAt={updatedAt} />
        </div>
    );
}

export default MiniItem;
