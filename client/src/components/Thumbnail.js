import React from 'react';
import '../styles/components/Thumbnail.scss';
import ClipLoader from "react-spinners/PulseLoader";



let loading = true;



class Thumbnail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        };
    }
    onLoad(e) {
        e.target.style.visibility = "visible";
        debugger;
        this.setState(() => ({ loading: false }))
    }

    render() {
        return (
            <div className="thumbnail-container">
                <div className="overlay">
                    {this.props.children}
                </div>
                <ClipLoader
                    loading={this.state.loading}
                    size="0.5rem"
                    css="loader"
                />
                <img className="thumbnail" onLoad={this.onLoad.bind(this)} style={{ visibility: "hidden" }} src={this.props.url}></img>
            </div>
        )
    }
}



export default Thumbnail;
