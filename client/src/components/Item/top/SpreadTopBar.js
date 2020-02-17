import React from 'react';
import '../../../styles/components/Item/SpreadTopBar.scss';
import Image from './Image';
import Price from './Price';
import Address from './Address';
import Stats from './Stats';
import PhoneNumber from './PhoneNumber';


const SpreadTopBar = ({display}) => (
    <div className="SpreadItem"> 
        <Image thumbHeight={10} />
        <div className="container-of-all-columns-bar-image-column">
            <Address />
            <Price />
            <Stats />
            <PhoneNumber />
        </div>
    </div>
);


export default SpreadTopBar;