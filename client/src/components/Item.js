import React from 'react';
import '../styles/components/Item.scss';
import MiniItem from './MiniItem/MiniItem';
import SpreadItem from './SpreadItem';
import { appendClass, removeClass } from '../utilities';
import '../styles/utility-classes/thumbnail-reactivity.scss';



class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            data: props.apt,
            classes: "Item__container",
            urls: []
        };
    }
    onMouseEnter = () => {
        this.setState((prevState) => ({ classes:appendClass(prevState.classes, 'thumbnail-effects') }))
    }
    onMouseLeave = () => {
        this.setState((prevState) => ({ classes:removeClass(prevState.classes, 'thumbnail-effects') }))
    }
    toggleSize = () => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    }
    render() {
        const { isOpen, data } = this.state;
        return (
            <div className={this.state.classes} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                {isOpen ?
                    (<SpreadItem {...data} />) :
                    (<MiniItem {...data.property.level_1} {...data.listing} />)
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