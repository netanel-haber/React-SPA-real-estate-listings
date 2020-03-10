import React from 'react';
import CustomLoader from './CustomLoader';


const LoaderBeforeData = ({ children, loading = children[0].props.loading || false }) => {
    const loadingStyling = { opacity: 0.6, pointerEvents: "none" };
    const doneLoadingStyling = { opacity: 1 };
    return (
        <>
            {React.cloneElement(
                children,
                {
                    style: {
                        ...loading
                            ? loadingStyling
                            : doneLoadingStyling,
                        ...children.style
                    }
                },
                <span>{React.createElement(CustomLoader,
                    { active:loading, type:"ball-spin-fade-loader", scaleBy:1.75 })}</span>
            )
            }
        </>
    )
}

export default LoaderBeforeData;
