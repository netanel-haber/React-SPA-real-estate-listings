import { useReducer } from 'react';
import spinnerReducer from '../reducers/spinnerReducer';

const useSpinnerBeforeImageLoad = (url) => {
    const [state, dispatch] = useReducer(spinnerReducer, { loading: true, url });
    if (state.url !== url && state.loading === false)
        dispatch({ type: "restart", url })
    return [state.loading, () => {
        dispatch({ type: "loaded", url })
    }]
}

export default useSpinnerBeforeImageLoad;