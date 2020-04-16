import React, { useRef } from 'react';
import { dayPickerProps, format, israeliDateFormat } from '../utilities/datetime';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import '#src#/styles/components/DayPicker.scss';

const { HEB_TODAY = "כניסה מיידית" } = {};

//refer to https://github.com/netanel-haber/real-estate-listing/commit/6e0594e23e0118c44e6e821de56858febab54575
const DayPicker = ({ onDayChange = () => { }, todayButton = HEB_TODAY }) => {
    const dp = useRef();
    return (<DayPickerInput
        ref={dp}
        component={React.forwardRef((props, ref) => <input
            {...props}
            ref={ref}
            onBlur={(e) => !e.relatedTarget?.className?.includes("DayPicker") && dp.current.hideDayPicker()}
        />)}
        onDayChange={onDayChange}
        placeholder={israeliDateFormat}
        formatDate={format}
        dayPickerProps={{ ...dayPickerProps, todayButton }} />)
}

export default DayPicker;