export default function reducer(state, { type, url }) {
    switch (type) {
        case "restart":
            return {
                loading: (state.url !== url) && (state.loading === false),
                url
            }
        case "loaded":
            return {
                loading: false,
                url
            }
        default:
            return state;
    }
}