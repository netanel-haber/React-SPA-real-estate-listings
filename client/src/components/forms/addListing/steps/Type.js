import React, { useState } from 'react';
import classnames from 'classnames';
import { useFormContext } from 'react-hook-form';
import { steps } from './stepIndex';

const RadioLabelWithDiv = ({ text, htmlFor, active }) => {
    return (
        <label htmlFor={htmlFor} className={classnames("pure-u-1 pure-u-sm-1-2", { active })}>
            {text}
        </label>
    );
}

const { HEB_FORSALE = "מכירה", HEB_RENT = "השכרה", HEB_ROOMMATES = "דירות שותפים", HEB_COMMERCIAL = "נדל\"ן מסחרי", HEB_CHOOSE = "בחר סוג נכס:" } = {};


const Type = () => {
    const { submitCount, errors, register } = useFormContext();
    const ids = ["t1", "t2", "t3", "t4"];
    const values = ["forsale", "rent", "commercial", "roommates"];
    const [selected, updateSelected] = useState(0);
    const texts = [HEB_FORSALE, HEB_RENT, HEB_COMMERCIAL, HEB_ROOMMATES];
    return (
        <div className="Type__container">
            <h5>{HEB_CHOOSE}</h5>
            {ids.map((id, index) => <input
                checked={selected === index}
                onChange={() => { updateSelected(index) }} key={index}
                ref={register({ required: true })} type="radio"
                name="type" id={id}
                value={values[index]} />)}
            <div className="Type__container-radio-group pure-g">
                {texts.map((text, index) => <RadioLabelWithDiv
                    active={selected === index} key={index}
                    text={text} htmlFor={ids[index]} />)}
            </div>
        </div>
    )
}

export default Type;
