import React from 'react';
import Loader from 'react-loaders';
import { yad2Orange } from '../styles/base/_settings.scss';


const CustomLoader = ({type = "ball-beat", scaleBy = "1", active = false}) => {
    return (
        <Loader
            type={type}
            color={yad2Orange}
            style={{ transform: `translate(-50%, -50%) scale(${scaleBy})` }}
            active={active} />
    )
};


export default CustomLoader;