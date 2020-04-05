import React from 'react';
import WithErrorMessageContainer from './WithErrorMessageContainer';
const withDivAndLabel = (el, text, required = false, className = "") => {
    return (
        <div className={`pure-control-group ${className}`} required={required}>
            <label htmlFor={el.props.name}>{text}</label>
            <WithErrorMessageContainer>
                {el}
            </WithErrorMessageContainer>
        </div>
    )
};


const WithDivsAndLabels = ({ children, texts, requiredIndices, className }) => {
    const allRequired = !Boolean(requiredIndices);
    return (
        <>
            {children.filter(ch => ch).map((field, index) => {
                const required = requiredIndices.includes(index);
                const clonedField = required ? React.cloneElement(field, { required }) : field;
                return (
                    <React.Fragment key={index}>
                        {withDivAndLabel(clonedField, texts[index], allRequired || required, className)}
                    </React.Fragment>
                );
            })}
        </>
    )
}

export { WithDivsAndLabels };
export default withDivAndLabel;