import React from 'react';
import '../styles/components/Thumbnail.scss';

const Thumbnail = (props) => (
    <div className="thumbnail-container">
        <div className="overlay">
            {props.children}
        </div>
        <img className="thumbnail" src={props.url}></img>
    </div>
);


export default Thumbnail;
