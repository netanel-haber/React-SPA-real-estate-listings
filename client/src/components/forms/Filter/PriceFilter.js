import React from 'react';
import { useFormContext } from 'react-hook-form';
import NumberInput from './../../NumberInput';


const { HEB_FROM = "ממחיר", HEB_TO = "עד מחיר" } = {};


const PriceFilter = () => {
    const { dispatch, options: { filters: { price } } } = useFormContext();
    const max = price?.["$lte"]
    const min = price?.["$gte"]
    return (
        <div className="PriceFilter">
            <NumberInput 
            callback={(val) => dispatch({ type: "UPDATE_FILTER_VALUE", payload: ["price", "$gte", val] })} 
            value={min||''} name="from" placeholder={HEB_FROM} />
            <NumberInput 
            callback={(val) => dispatch({ type: "UPDATE_FILTER_VALUE", payload: ["price", "$lte", val] })} 
            value={max||''} name="to" placeholder={HEB_TO} />
        </div>
    )
}

export default PriceFilter;