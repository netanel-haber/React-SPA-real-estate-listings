import React from 'react';
import '../styles/components/Item.scss';
import MiniItem from './MiniItem/MiniItem';
import SpreadItem from './SpreadItem';


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
    render() {
        const { isOpen, data } = this.state;
        return (
            <div className="Item__container">
                {isOpen ?
                    (<SpreadItem {...data} />) :
                    (<MiniItem
                        thumbData={{ url: this.state.urls[1], numPics: this.state.urls.length }}
                        aptData={{ ...data.property.level_1 }}
                        listData={{ ...data.listing }} />)
                }
            </div>
        );
    }
}




// <div className="testing">
//     <div onClick={this.toggleSize.bind(this)}>
//         jsdkflskjdlfjasd <br></br>
//         djaksldjflkasjdlkfaj <br></br>
//         jaslkdjflkajsdlkfjsdkl <br></br>
//         jlkajsdlkfjaslkdjfklsjdf <br></br>
//     </div>
//     <div className={isOpen ? "unfold" : "folded"}>
//         jsdkflskjdlfjasd <br></br>
//         djaksldjflkasjdlkfaj <br></br>
//         jaslkdjflkajsdlkfjsdkl <br></br>
//         jlkajsdlkfjaslkdjfklsjdf <br></br>
//     </div>
// </div>



export default Item;