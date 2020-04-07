const submit = (data, dispatch) => {
    console.log(data);
    const { from, to, type } = data;
    from && dispatch({ type: "UPDATE_FILTER_VALUE", payload: ["price", "$gte", from] })
    to && dispatch({ type: "UPDATE_FILTER_VALUE", payload: ["price", "$lte", to] })
    type && dispatch({ type: "UPDATE_FILTER_VALUE", payload: ["type", "$eq", type] })
}

export default submit;