import '../../../styles/components/Item/MiniTopBar.scss';
import React from 'react';
import Image from './Image';
import Stats from './Stats';
import Price from './Price';
import Address from './Address';
import { HideAt } from 'react-with-breakpoints';


const MiniTopBar = ({ display }) => {
    return (
        <div className="MiniItem" style={{ display }}>
            <HideAt breakpoint="small">
                <Image />
            </HideAt>
            <Address />
            <Stats />
            <Price />
        </div>
    );
}

export default MiniTopBar;



