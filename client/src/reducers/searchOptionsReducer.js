const searchOptionsReducer = (state, { type, payload }) => {
    const { term, options } = state;
    const { term: newTerm, options: newOptions } = payload;
    switch (type) {
        case "UPDATE_OPTIONS": {
            return { term: newTerm, options: term === newTerm ? [...options, ...newOptions] : [] };
        }
        default:
            return state;
    }
}
const updateAction = (term, options) => ({ type: "UPDATE_OPTIONS", payload: { options, term } });

export { updateAction }
export default searchOptionsReducer;