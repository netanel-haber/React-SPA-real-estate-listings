import extractFieldAndValueForPlace from './extractFieldAndValueForPlace';
import { isFutureDate } from '../../../utilities/datetime';


const getOperatorToRemoveAndOperatorToAdd = (date) =>
    isFutureDate(date) ? ["$lte", "$gte"] : ["$gte", "$lte"]


const submit = (data, dispatch) => {
    const {
        priceFrom, priceTo,
        roomsFrom, roomsTo,
        roommatesFrom, roommatesTo,
        sqMetersFrom, sqMetersTo,
        type, place,
        entryDate
    } = data;

    const [field, value] = extractFieldAndValueForPlace(place);
    const [removeThisOperator, addThisOperator] = getOperatorToRemoveAndOperatorToAdd(entryDate);

    dispatch({ type: "REMOVE_FILTER", payload: ["entryDate", removeThisOperator] })

    dispatch({
        type: "UPDATE_FILTERS_VALUES",
        payload: [
            ["type", "$eq", type],

            ["price", "$gte", priceFrom],
            ["price", "$lte", priceTo],

            ["rooms", "$gte", roomsFrom],
            ["rooms", "$lte", roomsTo],

            ["roommates", "$gte", roommatesFrom],
            ["roommates", "$lte", roommatesTo],

            ["sqMeters", "$gte", sqMetersFrom],
            ["sqMeters", "$lte", sqMetersTo],

            ["entryDate", addThisOperator, entryDate],

            ...["municipality", "area", "street"].map(field => [field, "$eq", undefined]),
            [field, "$eq", value]
        ]
    })
}

export default submit;