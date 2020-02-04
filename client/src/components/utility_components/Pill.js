import React from 'react';

const Pill = ({ className, text })(
    <div className={className}>
        <div className="pill-a">
            <div className="pill-b">
                <span className="pill-text">{text}</span>
            </div>
        </div>
    </div>
);


export default Pill;