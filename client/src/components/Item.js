import '../styles/components/Item.scss';

import React from 'react';
import MiniItem from './Item/MiniItem';
import SpreadItem from './Item/SpreadItem';
import ItemContext from '../contexts/ItemContext';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            data: props.apt,
            urls: [],
        };
    }
    componentDidMount() {
        fetch('/api/get-pic-urls', {
            body: JSON.stringify(this.state.data.listing.picKeys),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST'
        })
            .then(res => res.json())
            .then(urls => { this.setState(() => ({ urls })) });
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
                propertyLevel1: data.property.level_1
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


export default Item;