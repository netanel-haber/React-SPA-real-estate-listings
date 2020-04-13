import React from 'react';
import { FormSelect } from '../../ListContainer/SortBy/Select';
import { useFormContext } from 'react-hook-form';




const SelectRange = ({ name, options }) => {
    const { register } = useFormContext();
    return (
        <>
            <FormSelect className="Filter_RoomRange" name={name+"From"} options={options} ref={register} />
            <FormSelect className="Filter_RoomRange" name={name+"To"} options={options} ref={register} />
        </>
    )
}


export default SelectRange;





