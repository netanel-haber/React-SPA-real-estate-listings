import React from 'react';
import { useForm, FormContext } from 'react-hook-form';
import "#src#/styles/components/Filter/Filter.scss";
import PriceFilter from './PriceFilter';
import withDivAndLabel from './../withDivAndLabel';


const Filter = ({ dispatchFilters }) => {
    const formMethods = useForm();
    return (
        <FormContext {...formMethods} {...{ dispatchFilters }}>
            <form>
                <div className="ListsContainer__component">
                    <div class="Filter">
                        <PriceFilter />
                    </div>
                </div>
            </form>
        </FormContext>
    )
}

export default Filter;