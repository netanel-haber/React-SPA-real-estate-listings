import '../../styles/components/Item.scss';

import React from 'react';
import MiniItem from './MiniItem';
import SpreadItem from './SpreadItem';
import ItemContext from '../../contexts/ItemContext';
import { getPicUrls } from '../../s3';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            data: props.apt,
            urls: [],
        };
    }
    componentDidMount() {
        getPicUrls(this.state.data.listing.pictureKeys)
            .then(urls => { this.setState(() => ({ urls })) })
    }
    toggleSize = () => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    }
    unfold(e) {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    }
    render() {
        const { isOpen, data } = this.state;
        return (
            <ItemContext.Provider value={{
                urls: this.state.urls,
                listing: data.listing,
                propertyLevel1: data.level1
            }}>
                <div className="Item__container" onClick={this.unfold.bind(this)}>
                    {isOpen ?
                        (<SpreadItem />) :
                        (<MiniItem />)
                    }
                </div>
            </ItemContext.Provider>

        );
    }
}


// const Item = ()=>{
//     return (

//     )
// }


export default Item;