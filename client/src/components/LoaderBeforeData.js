import React from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import { mSize } from '../styles/base/_settings.scss';



const LoaderBeforeData = ({ loaderProps, children, loading = children[0].props.loading || false, type = PulseLoader }) => {
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
                <span className="Loader">{React.createElement(type,
                    { loading, margin: mSize, ...loaderProps })}</span>
            )
            }
        </>
    )
}

export default LoaderBeforeData;
