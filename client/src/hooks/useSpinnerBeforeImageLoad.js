import { useReducer } from 'react';


function reducer(state, { type, url }) {
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


const useSpinnerBeforeImageLoad = (url) => {
    const [state, dispatch] = useReducer(reducer, { loading: true, url });
    if (state.url !== url && state.loading === false)
        dispatch({ type: "restart", url })
    return [state.loading, () => {
        dispatch({ type: "loaded", url })
    }]
}

export default useSpinnerBeforeImageLoad;