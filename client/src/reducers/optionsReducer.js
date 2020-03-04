const initialOptions = {
    sorts: { updatedAt: -1 },
    filters: {},
    limit: 3
};


const optionsReducer = (state, { type, payload }) => {
    switch (type) {
        case "SORTS":
            return { ...state, sorts: payload }
        case "FILTERS":
            let filters = { ...state.filters };
            Object.entries(payload).forEach(([key, value]) => {
                if (value === false)
                    delete filters[key];
                else
                    filters[key] = value;
            })
            return { ...state, filters };
        case "LIMIT":
            return { ...state, limit: payload }
        default:
            return state;
    }
}




export { optionsReducer, initialOptions }

