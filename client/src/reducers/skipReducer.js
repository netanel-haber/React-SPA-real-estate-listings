const skipReducer = (state, { value, type }) => {
    switch (type) {
        case "TRIGGER_UPDATE": {
            return { value, should: true }
        }
        case "DONT_TRIGGER_UPDATE": {
            return { value: 0, should: false }
        }
        default:
            return { value: 0, should: true }
    }
}

export default skipReducer;