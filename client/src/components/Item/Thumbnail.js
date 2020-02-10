import React, { useState } from 'react';
import '../../styles/components/Thumbnail.scss';
import PulseLoader from "react-spinners/PulseLoader";

const rem = (val) => val + "rem";

const Thumbnail = ({ height, width = height * (5 / 3), url, children }) => {
    const [loading, setLoading] = useState(true);
    const onLoad = () => {
        setLoading(false);
    }
    return (
        <div style={{ height: rem(height), width: rem(width) }} className="thumbnail-container">
            <div className="overlay">
                {children}
            </div>
            <PulseLoader loading={loading} size="0.75rem" />
            <img className="thumbnail" onLoad={onLoad} style={{ visibility: loading ? "hidden" : "visible" }} src={url}></img>
        </div>
    )
}



export default Thumbnail;
