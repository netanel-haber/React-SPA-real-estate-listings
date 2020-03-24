import React from 'react'
import { useFormContext } from 'react-hook-form';
const PropertyDetails = () => {
    const { submitCount, errors, register } = useFormContext();
    return (
        <>
        <div>
                PropertyDetails
                </div>
            
        </>
    )
}

export default PropertyDetails;