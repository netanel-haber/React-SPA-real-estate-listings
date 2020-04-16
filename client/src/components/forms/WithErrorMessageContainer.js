import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';


const WithErrorMessageContainer = ({ children: el }) => {
    const [visibility, toggleVisi] = useState("visible");
    const { formState: { submitCount }, errors } = useFormContext();

    const errorMessage = el.props.name
        .split(' ')
        .map(name => errors?.[name]?.message)
        .filter(message => Boolean(message))
        .join('\n')


    useEffect(() => {
        toggleVisi("visible");
        const timeout = setTimeout(() => { toggleVisi("hidden") }, 2000);
        return () => { clearTimeout(timeout) }
    }, [errorMessage, submitCount, errors])
    return (
        <div className="error-message-container">
            {el}
            {errorMessage &&
                <div className="error-message" style={{ visibility }} >
                        {errorMessage}
                </div>
            }
        </div>
    )
}

export default WithErrorMessageContainer;