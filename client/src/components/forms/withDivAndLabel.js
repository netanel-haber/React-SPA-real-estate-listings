import React from 'react';
import WithErrorMessageContainer from './WithErrorMessageContainer';
const withDivAndLabel = (el, text, required = false) => {
    return (
        <div className="pure-control-group" required={required}>
            <label htmlFor={el.props.name}>{text}</label>
            <WithErrorMessageContainer>
                {el}
            </WithErrorMessageContainer>
        </div>
    )
};


const WithDivsAndLabels = ({ children, texts, requiredIndices }) => {
    const allRequired = !Boolean(requiredIndices);
    return (
        <>
            {children.filter(ch=>ch).map((field, index) => (
                <React.Fragment key={index}>
                    {withDivAndLabel(field, texts[index], allRequired || requiredIndices.includes(index))}
                </React.Fragment>
            ))}
        </>
    )
}

export { WithDivsAndLabels };
export default withDivAndLabel;