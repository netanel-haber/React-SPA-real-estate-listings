import React, { useState } from 'react';
import '../styles/components/Thumbnail.scss';
import PulseLoader from "react-spinners/PulseLoader";

const Thumbnail = (props) => {
    const [loading, setLoading] = useState(true);
    const onLoad = (e) => {
        e.target.style.visibility = "visible";
        setLoading(false);
    }
    return (
        <div className="thumbnail-container">
            <div className="overlay">
                {props.children}
            </div>
            <PulseLoader loading={loading} size="0.75rem" />
            <img className="thumbnail" onLoad={onLoad} style={{ visibility: "hidden" }} src={props.url}></img>
        </div>
    )
}



export default Thumbnail;
