import React from 'react';
import '../styles/components/Item.scss';
import MiniItem from './MiniItem';
import SpreadItem from './SpreadItem';


class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            data: props.apt
        };
    }
    toggleSize(e) {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    }
    render() {
        const { isOpen, data } = this.state;

        return (
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
            <div className="Item__container">
                {isOpen ?
                    (<SpreadItem {...data} />) :
                    (<MiniItem {...data.property.level_1} {...data.listing} />)
                }
            </div>
        );
    }
}





export default Item;