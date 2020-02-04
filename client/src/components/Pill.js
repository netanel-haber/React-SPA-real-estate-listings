import React from 'react';
import '../styles/components/Pill.scss';


const Pill = ({text}) => (
    <div className="pill">
        <div className="pill-a">
            <div className="pill-b">
                <span className="pill-text">{text}</span>
            </div>
        </div>
    </div>
);

export default Pill;
