const searchOptionsReducer = (state, { type, payload }) => {
    const { term, options } = state;
    const { term: newTerm, options: newOptions } = payload;
    switch (type) {
        // case "UPDATE_TERM":
        //     return { options: [], term: newTerm }
        case "UPDATE_OPTIONS": {
            let result = { term: newTerm, options: term === newTerm ? [...options, ...newOptions] : [] };
            console.log(result)
            return result;
        }
        default:
            return state;
    }
}
const updateTermAction = (term) => ({ type: "UPDATE_TERM", payload: { term } });
const updateAction = (term, options) => ({ type: "UPDATE_OPTIONS", payload: { options, term } });

export { updateAction, updateTermAction }
export default searchOptionsReducer;