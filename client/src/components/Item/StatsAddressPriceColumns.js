import React, { useContext } from 'react';
import Stats from './Stats';
import Address from './Address';
import Price from './Price';
import ItemContext from '../../contexts/ItemContext';
import phone from '../../icons/phone';
import '../../styles/components/SpreadItem.scss';

const { showPhone } = {
    showPhone: "הצג מספר טלפון"
};

const StatsAddressAndPriceColumns = (props) => {
    const { propertyLevel1, listing: { updatedAt } } = useContext(ItemContext);
    const {
        rooms, floor, sqMeters,
        address, type,
        price, mitigator
    } = propertyLevel1;
    return (
        <div className="StatsAddressAndPriceColumns">
            <div className="upper">
                <Address address={address} type={type} />
                <Price price={price} mitigator={mitigator} updatedAt={updatedAt} />
            </div>
            <div className="lower">
                <Stats rooms={rooms} floor={floor} sqMeters={sqMeters} />
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