import React, { useState, useEffect } from 'react';
import classnames from "classnames";
import { useFormContext } from 'react-hook-form';
import '#src#/styles/components/forms/ThreewayToggle.scss';

const ThreewayToggle = ({ name, text, picUrl }) => {
    const { register, setValue, watch } = useFormContext();
    const isActive = watch(name);
    const [display, update] = useState("none");
    useEffect(() => {
        register({ name })
    }, [register])
    return (
        <div className="ThreewayToggle">
            <div>
                <img onLoad={() => { update("initial") }} style={{ display }} alt="" src={picUrl} />
                <div>{text}</div>
            </div>
            <div className={classnames({ touched: isActive !== undefined })}>
                <button onClick={() => { setValue(name, true) }} type="button" className={classnames("options", { active: isActive })} >
                    ✔
                </button>
                <button onClick={() => { setValue(name, false) }} type="button" className={classnames("options", { active: isActive === false })}>
                    ✘
                </button>
            </div>
        </div>
    )
}

const ThreewayToggleContainer = ({ toggleProps, className }) => (
    <div className={classnames("ThreewayToggleContainer", className)}>
        {toggleProps.map((toggleProps, index) => <ThreewayToggle key={index} {...toggleProps} />)}
    </div>
)

export { ThreewayToggleContainer }
export default ThreewayToggle;