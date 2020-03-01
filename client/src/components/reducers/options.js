const optionsReducer = (prevState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "UPDATE_SORTS":
            return { ...prevState, skip: 0, sorts: payload }
        case "UPDATE_FILTERS":
            return { ...prevState, skip: 0, filters: payload }
        case "UPDATE_SKIP":
            return { ...prevState, skip: (payload - 1) * listingsInPage }
        default:
            return prevState;
    }
}

export default optionsReducer;