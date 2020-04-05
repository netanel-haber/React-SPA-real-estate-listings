const initialOptions = {
    sorts: { updatedAt: -1 },
    filters: {
        price: [],
        pictureKeys: [],
    },
    limit: 3
};

const optionsReducer = (state, { type, payload }) => {
    const { filters, sorts, limit } = state;
    switch (type) {
        case "SORTS":
            return { ...state, sorts: payload }
        case "LIMIT":
            return { ...state, limit: payload }
        case "TOGGLE_FILTER":
            const [filter, toggleVal] = payload;
            const curFilter = filters[filter];
            return {
                sorts,
                limit,
                filters: {
                    ...filters,
                    [filter]: curFilter.includes(toggleVal)
                        ? curFilter.filter(el => el !== toggleVal)
                        : [...curFilter, toggleVal]
                }
            }
        default:
            return state;
    }
}




export { optionsReducer, initialOptions }

