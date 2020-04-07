
const mapAffixToField = {
    "שכונה": "neighborhood",
    "רח'": "street",
    default: "city"
};
const extractFieldAndValueForPlace = (place) => {
    const field = mapAffixToField[Object.keys(mapAffixToField).find(key => place?.includes(key)) || mapAffixToField.default];
    console.log(field);
}



const submit = (data, dispatch) => {
    console.log(data);
    const { from, to, type, place } = data;
    from && dispatch({ type: "UPDATE_FILTER_VALUE", payload: ["price", "$gte", from] });
    to && dispatch({ type: "UPDATE_FILTER_VALUE", payload: ["price", "$lte", to] });
    type && dispatch({ type: "UPDATE_FILTER_VALUE", payload: ["type", "$eq", type] });
    // place
    extractFieldAndValueForPlace(place)
}

export default submit;