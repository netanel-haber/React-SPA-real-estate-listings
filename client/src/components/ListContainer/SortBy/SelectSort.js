import React, { useState, useContext } from 'react';
import '../../../styles/components/SortBy/SelectSort.scss';
import Bullet from './../../Bullet';
import ItemListContext from '../../../contexts/ItemListContext';

const Option = ({ onClick, text, selected }) => (
    <div onClick={onClick}>
        <Bullet {...{ selected }}></Bullet>
        <div>{text}</div>
    </div>
);


const SelectSort = ({ sortByOptions }) => {
    const options = Object.entries(sortByOptions);
    const [[text, value], changeOption] = useState(options[0]);
    const [isOpen, toggleOpen] = useState(false);
    const { dispatchSorts } = useContext(ItemListContext);
    function onSelectClick(e) {
        e.preventDefault();
        toggleOpen(!isOpen)
    }
    function onOptionClick(e, index) {
        changeOption(options[index]);
        dispatchSorts(options[index][1])
        toggleOpen(false);
    };
    return (
        <div className="SortBy__select-sort-container">
            <div className="actual-select" onClick={onSelectClick}>
                <div>{text}</div>
                <span />
            </div>
            {isOpen && <div className="actual-dropdown">
                {options.map(([text, childValue], index) =>
                    <Option key={text} text={text} onClick={(e) => onOptionClick(e, index)} selected={childValue === value} />)}
            </div>}
        </div>
    )
}

export default SelectSort;
