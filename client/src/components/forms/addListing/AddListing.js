import '#src#/styles/components/forms/form-utilities.scss';
import React from 'react';
import { FormContext, useForm } from 'react-hook-form';
import { formHebrew } from '../heb';
import { AddPics, Address, ContactDetails, Finalize, ListingDetails, PropertyDetails, Type } from './steps/stepIndex';
import onSubmit from './submit';

const { HEB_SEND } = formHebrew;


const AddListing = () => {
    const { register, handleSubmit, errors, formState: { submitCount } } = useForm()
    const steps = [Type, Address, PropertyDetails, ListingDetails, AddPics, ContactDetails, Finalize]
    return (
        <FormContext {...{ errors, submitCount, register }}>
            <div>
                <form className="gen-form" onSubmit={handleSubmit(onSubmit)}>
                    {steps.map((Step, index) => <section key={index}><Step /></section>)}
                    <div className="submit-container pure-control-group">
                        <button className="pure-button pure-button-primary" type="submit" ref={register}>{HEB_SEND}</button>
                    </div>
                </form>
            </div>
        </FormContext>
    )
}

export default AddListing;
