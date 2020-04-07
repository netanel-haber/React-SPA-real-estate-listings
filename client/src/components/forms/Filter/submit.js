
const mapValueToField = {
    "שכונה": "area",
    "רח'": "street",
};
const extractFieldAndValueForPlace = (place) => {
    let field;
    for (let key of Object.keys(mapValueToField)) {
        if (place.includes(key)) {
            field = mapValueToField[key];
        }
    }
    return (!field) ? ["municipality", place] : [field, place?.split(/ \(/)?.[0]];
}



const submit = (data, dispatch) => {
    // console.log(data);
    const { from, to, type, place } = data;
    from && dispatch({ type: "UPDATE_FILTER_VALUE", payload: ["price", "$gte", from] });
    to && dispatch({ type: "UPDATE_FILTER_VALUE", payload: ["price", "$lte", to] });
    type && dispatch({ type: "UPDATE_FILTER_VALUE", payload: ["type", "$eq", type] });
    if (place) {
        const [field, value] = extractFieldAndValueForPlace(place);
        if (!field)
            return;
        dispatch({ type: "UPDATE_FILTER_VALUE", payload: [field, "$eq", value] })
    }
}

export default submit;