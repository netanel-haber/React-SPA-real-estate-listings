import React from 'react';
// import 'react-day-picker/lib/style.css';
import { dayPickerProps, format, israeliDateFormat } from '../utilities/datetime';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import '#src#/styles/components/DayPicker.scss';

const { HEB_TODAY = "כניסה מיידית" } = {};

const DayPicker = ({ onDayChange = () => { }, todayButton = HEB_TODAY }) => (
    <DayPickerInput
        onDayChange={onDayChange}
        placeholder={israeliDateFormat}
        formatDate={format}
        dayPickerProps={{ ...dayPickerProps, todayButton }} />
)

export default DayPicker;