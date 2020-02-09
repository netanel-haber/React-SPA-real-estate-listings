import React from 'react';
import '../../styles/components/SpreadItem.scss';
import StatsAddressAndPriceColumns from './StatsAddressPriceColumns';
import ImageColumn from './ImageColumn';

const SpreadItem = () => {
    return (
        <div className="SpreadItem">
            <ImageColumn thumbHeight={10} />
            <StatsAddressAndPriceColumns />
        </div>
    )
};


export default SpreadItem;