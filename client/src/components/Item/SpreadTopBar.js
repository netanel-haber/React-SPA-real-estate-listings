import React from 'react';
import '../../styles/components/Item/SpreadTopBar.scss';

import Image from './Image';
import Price from './Price';
import Address from './Address';
import Stats from './Stats';
import PhoneNumber from './PhoneNumber';


const SpreadItem = () => (
    <div className="SpreadItem">
        <Image thumbHeight={10} />
        <div className="contain">
            <Address />
            <Price />
            <Stats />
            <PhoneNumber />
        </div>
    </div>
);


export default SpreadItem;