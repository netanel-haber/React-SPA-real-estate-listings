import React from 'react';
import '../styles/components/Item.scss';


let types = [];


let mockProps = {
    listingMetaData: {
        listerId: 34759837489,
        listingId: 239029304,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        deletedAt: null
        // type: 
    },
    coreAttr: { price: 2500 },
    topLevelAttr: {},

    subLevel: [2, 6],
    lastLevel: [4]
};




class Item extends React.Component {
    // constructor(props) {
    //     // super(props);
    //     // // const { isOpen = false, data } = props;
    //     // // const { type, listerId, listingId, coreAttr, topLevelAttr, fineGrainAttr } = data;
    //     // // const { price } = coreAttr;
    //     // this.state = {
    //     //     // isOpen
    //     // }
    // }

    toggleSize() {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    }


    render() {
        let el = Object.keys(mockProps).map(key => {
            return (<div>{mockProps[key]}</div>)
        });
        return (
            <div className="testing" onClick={this.toggleSize.bind(this)}>
                
            </div>);
    }
}





export default Item;