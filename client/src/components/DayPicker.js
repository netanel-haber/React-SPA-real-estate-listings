import React from 'react';
import 'react-day-picker/lib/style.css';
import { dayPickerProps, format, israeliDateFormat } from '../utilities/datetime';
import DayPickerInput from 'react-day-picker/DayPickerInput';

const DayPicker = ({ onDayChange = () => { } }) => (
    <DayPickerInput
        onDayChange={onDayChange}
        placeholder={israeliDateFormat}
        formatDate={format}  
        {...{ dayPickerProps}} />
)

export default DayPicker;