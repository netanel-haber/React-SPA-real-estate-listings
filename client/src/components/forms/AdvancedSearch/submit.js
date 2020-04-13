
const submit = (data, dispatch, boolAttributeNames) => {
    const aggregatePayload = boolAttributeNames.map(name => [name, "$eq", data[name]]);
    dispatch({
        type: "UPDATE_FILTERS_VALUES",
        payload: aggregatePayload
    })
}


export default submit;