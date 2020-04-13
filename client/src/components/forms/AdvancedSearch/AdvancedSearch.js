import { ThreewayToggleContainer } from '../ThreewayToggle';
import { booleanAttributes, translation } from '../utilities';
import React, { useState, useEffect } from 'react';
import submit from './submit';
import { useForm, FormContext } from 'react-hook-form';
import { advancedSearchHebrew } from '../heb'
import '#src#/styles/components/forms/AdvancedSearch/AdvancedSearch.scss';

const { HEB_FILTER, HEB_ADVANCED_SEARCH, HEB_RESET, HEB_COLLAPSE } = advancedSearchHebrew;


const AdvancedSearch = ({ type, dispatch, options }) => {
    const boolAttributeNames = [...booleanAttributes.general, ...(booleanAttributes[type] || [])];
    const formMethods = useForm();
    const { handleSubmit, register, setValue } = formMethods;
    const [open, toggleOpen] = useState(false);

    useEffect(() => {
        boolAttributeNames.forEach(name => register({ name }, {}))
    }, [register])

    useEffect(() => {
        setValue(boolAttributeNames.map((attr) => ({ [attr]: undefined })))
        dispatch({ type: "RESET_FILTERS" })
    }, [type, dispatch])

    return (
        <div className="ListsContainer__component AdvancedSearch">
            <button onClick={() => toggleOpen(!open)} className="collapse-button" type="button">
                {open ? HEB_COLLAPSE : HEB_ADVANCED_SEARCH}
            </button>
            {open && (
                <form className="gen-form" onSubmit={handleSubmit((data) => submit(data, dispatch, boolAttributeNames))}>
                    <FormContext {...formMethods} {...{ dispatch, options }}>
                        < div className="fields" >
                            <ThreewayToggleContainer toggleProps={boolAttributeNames.map(attr => ({ name: attr, ...translation(attr) }))} />
                            <button className="reset" type="button" onClick={() => { setValue(boolAttributeNames.map((attr) => ({ [attr]: undefined }))) }}>{HEB_RESET}</button>
                        </div >
                    </FormContext>
                    <div className="submit-container">
                        <button className="pure-button pure-button-primary" type="submit">{HEB_FILTER}</button>
                    </div>
                </form>
            )}
        </div>
    )
}


export default AdvancedSearch;
