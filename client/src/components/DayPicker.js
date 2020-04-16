import React, { useRef } from 'react';
import { dayPickerProps, format, israeliDateFormat } from '../utilities/datetime';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import '#src#/styles/components/DayPicker.scss';

const { HEB_TODAY = "כניסה מיידית" } = {};


const DayPicker = ({ onDayChange = () => { }, todayButton = HEB_TODAY }) => {
    const dp = useRef();
    return (<DayPickerInput
        ref={dp}
        component={props => <input
            {...props}
            onBlur={(e) => !e.relatedTarget?.className?.includes("DayPicker") && dp.current.hideDayPicker() }
        />}
        onDayChange={onDayChange}
        placeholder={israeliDateFormat}
        formatDate={format}
        dayPickerProps={{ ...dayPickerProps, todayButton }} />)
}

export default DayPicker;