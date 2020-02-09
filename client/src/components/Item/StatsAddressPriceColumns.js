import React, { useContext } from 'react';
import StatsColumn from './StatsColumn';
import AddressColumn from './AddressColumn';
import PriceColumn from './PriceColumn';
import ItemContext from '../../contexts/ItemContext';
import phone from '../../icons/phone';
import '../../styles/components/SpreadItem.scss';

const { showPhone } = {
    showPhone: "הצג מספר טלפון"
};

const StatsAddressAndPriceColumns = (props) => {
    const { data } = useContext(ItemContext);
    const { updatedAt } = data.listing;
    const {
        rooms, floor, sqMeters,
        address, type,
        price, mitigator
    } = data.property.level_1;
    return (
        <div className="StatsAddressAndPriceColumns">
            <div className="upper">
                <AddressColumn address={address} type={type} />
                <PriceColumn price={price} mitigator={mitigator} updatedAt={updatedAt} />
            </div>
            <div className="lower">
                <StatsColumn rooms={rooms} floor={floor} sqMeters={sqMeters} />
                <button className="show-phone-number">
                    <img width="15px" height="15px" src={phone}></img>
                    <div>
                        {showPhone}
                    </div>
                </button>
            </div>
        </div>
    )
}

export default StatsAddressAndPriceColumns;