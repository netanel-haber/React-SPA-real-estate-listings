import React from 'react';
import '../styles/components/Thumbnail.scss';
import PulseLoader from "react-spinners/PulseLoader";


class Thumbnail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        };
    }
    onLoad(e) {
        e.target.style.visibility = "visible";
        this.setState(() => ({ loading: false }))
    }
    render() {
        return (
            <div className="thumbnail-container">
                <div className="overlay">
                    {this.props.children}
                </div>
                <PulseLoader
                    loading={this.state.loading}
                    size="0.75rem"
                />
                <img className="thumbnail" onLoad={this.onLoad.bind(this)} style={{ visibility: "hidden" }} src={this.props.url}></img>
            </div>
        )
    }
}



export default Thumbnail;
