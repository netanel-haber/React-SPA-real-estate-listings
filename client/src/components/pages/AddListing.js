import React from 'react';
import { useStatefulRedirect } from './../../hooks/useRedirect';


const AddListing = () => {
    const prompt = useStatefulRedirect();
    return (
        <div>
            AddListing
            {prompt}
        </div>
    )
}

export default AddListing;