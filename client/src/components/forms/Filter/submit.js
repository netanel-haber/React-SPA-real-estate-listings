import extractFieldAndValueForPlace from './extractFieldAndValueForPlace';

const submit = (data, dispatch) => {
    const {
        priceFrom, priceTo,
        roomsFrom, roomsTo,
        roommatesFrom, roommatesTo,
        type, place,
    } = data;

    const [field, value] = extractFieldAndValueForPlace(place);

    dispatch({
        type: "UPDATE_FILTERS_VALUES",
        payload: [
            ["price", "$gte", priceFrom],
            ["price", "$lte", priceTo],
            ["type", "$eq", type],
            ["rooms", "$gte", roomsFrom],
            ["rooms", "$lte", roomsTo],
            ["roommates", "$gte", roommatesFrom],
            ["roommates", "$lte", roommatesTo],
            ...["municipality", "area", "street"].map(field => [field, "$eq", undefined]),
            [field, "$eq", value]
        ]
    })
}

export default submit;