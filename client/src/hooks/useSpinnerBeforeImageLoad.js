import { useReducer } from 'react';


function reducer(state, { type, url }) {
    const { url: prevUrl, loading: prevLoading } = state;
    switch (type) {
        case "restart":
            return { loading: (prevUrl !== url) && !prevLoading, url }
        case "loaded":
            return { loading: false, url }
        default:
            return state;
    }
}


const useSpinnerBeforeImageLoad = (url) => {
    const [state, dispatch] = useReducer(reducer, { loading: true, url });
    if (state.url !== url)
        dispatch({ type: "restart", url })
    return [state.loading, () => {
        dispatch({ type: "loaded", url })
    }]
}

export default useSpinnerBeforeImageLoad;