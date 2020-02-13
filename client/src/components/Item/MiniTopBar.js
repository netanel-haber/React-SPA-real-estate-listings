import '../../styles/components/Item/MiniTopBar.scss';

import React from 'react';
import Image from './Image';
import Stats from './Stats';
import Price from './Price';
import Address from './Address';


const MiniItem = ({ display }) => {
    return (
        <div className="MiniItem">
            <Image thumbHeight={5} />
            <Address />
            <Stats />
            <Price />
        </div>
    );
}

export default MiniItem;



