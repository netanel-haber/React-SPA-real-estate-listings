import React from 'react';
import '../../styles/components/MiniItem.scss';
import ImageColumn from './ImageColumn';
import StatsColumn from './StatsColumn';
import PriceColumn from './PriceColumn';
import AddressColumn from './AddressColumn';

const MiniItem = (props) => {
    let {
        price, type, rooms,
        address: { municipality, areaId, street, number, apt },
        picKeys, floor, totalPropertyFloors, sqMeters,
        mitigator, updatedAt
    } = props;
    return (
        <div className="MiniItem__container">
            <ImageColumn />
            <AddressColumn />
            <StatsColumn rooms={rooms} floor={floor} sqMeters={sqMeters} />
            <PriceColumn price={price} mitigator={mitigator} updatedAt={updatedAt} />
        </div>
    );
}

export default MiniItem;
