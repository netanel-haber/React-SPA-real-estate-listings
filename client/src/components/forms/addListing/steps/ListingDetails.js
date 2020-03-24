import React from 'react'
import { useFormContext } from 'react-hook-form';
const ListingDetails = () => {
    const { submitCount, errors, register } = useFormContext();
    return (
        <>
        <div>
                 ListingsDetails
                </div>
           
        </>
    )
}

export default ListingDetails;