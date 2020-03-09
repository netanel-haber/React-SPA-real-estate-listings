import React, { useState, useEffect, useRef } from 'react';

const WithErrorMessageContainer = ({ children: [el, error] }) => {
    const [visibility, toggleVisi] = useState("visible");
    useEffect(() => {
        toggleVisi("visible");
        setTimeout(() => { toggleVisi("hidden") }, 2000)
    }, [error, el])
    return (
        <div className="error-message-container">
            {el}
            {error &&
                <div className="error-message" style={{ visibility }} onMouseOver={() => { toggleVisi("hidden") }}>
                    {error}
                </div>
            }
        </div>
    )
}

export default WithErrorMessageContainer;