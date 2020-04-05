import React from 'react';
import { useForm, FormContext } from 'react-hook-form';
import "#src#/styles/components/Filter/Filter.scss";
import PriceFilter from './PriceFilter';
import withDivAndLabel from './../withDivAndLabel';

const submit = (data) => {
    console.log(data);
}



const Filter = ({ dispatch, options }) => {
    const formMethods = useForm();
    const { handleSubmit } = formMethods;
    return (
        <FormContext {...formMethods} {...{ dispatch, options }}>
            <form onSubmit={handleSubmit(submit)}>
                <div className="ListsContainer__component">
                    <div className="Filter">
                        <PriceFilter />
                    </div>
                </div>
            </form>
        </FormContext>
    )
}

export default Filter;