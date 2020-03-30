import React from 'react'
import { useFormContext } from 'react-hook-form';

const ContactDetails = () => {
    const { submitCount, errors, register } = useFormContext();
    return (
        <>
        <div>
            
                contactDetails
                </div>
            
        </>
    )
}

export default ContactDetails;