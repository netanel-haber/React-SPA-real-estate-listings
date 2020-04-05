const initialOptions = {
    sorts: { updatedAt: -1 },
    filters: {},
    limit: 3
};


const staticToggleFilters = {
    price: "$exists",
    pictureKeys: "$isntEmptyArray"
};


const optionsReducer = (state, { type, payload }) => {
    const { filters, sorts, limit } = state;
    switch (type) {
        case "SORTS":
            return { ...state, sorts: payload }
        case "LIMIT":
            return { ...state, limit: payload }
        case "TOGGLE_FILTER":
            const { [payload]: filterIsOn, ...rest } = filters;
            return {
                sorts,
                limit,
                filters: filterIsOn ? rest : { ...filters, [payload]: staticToggleFilters[payload] }
            }
        default:
            return state;
    }
}




export { optionsReducer, initialOptions }

