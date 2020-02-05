import React from 'react';
import '../styles/components/Pill.scss';

const multiplyREM = (remString, mul = 0.5) => ((remString.match(/\d*/)[0]) * mul) + "rem";


const Pill = ({ text, rootWidth, rootHeight = multiplyREM(rootWidth, (6 / 8)), fontSize = multiplyREM(rootWidth, 0.25) }) => {
    const pillStyle = { style: { width: rootWidth, height: rootHeight } };
    const recStyle = { style: { width: multiplyREM(rootWidth), height: multiplyREM(rootHeight) } }
    return (
        <div className="Pill" {...pillStyle}>
            <div className="Pill__child" {...recStyle}>
                <div className="Pill__child-overlay" {...recStyle}>
                    <span style={{ fontSize }} >{text}</span>
                </div>
            </div>
        </div >
    )
};

export default Pill;
