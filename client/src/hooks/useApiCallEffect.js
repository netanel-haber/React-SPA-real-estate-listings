import { useEffect } from 'react';
import toaster from '../utilities/toaster';
import useDeepCompareEffect from 'use-deep-compare-effect';


const useApiCallEffect = (apiCall, endCallbacks, dependencies = []) => {
    useEffect(() => {
        const abortController = new AbortController();
        apiCall(abortController.signal).then(endCallbacks).catch((ex) => {
            if (!abortController.signal.aborted && ex.toString() !== "-") {
                toaster();
            }
        });
        return () => { abortController.abort() }
    }, dependencies)
};

export { useApiCallEffect };


export default (call, callback, toggleLoading, dependencies, bool = true) => {
    useDeepCompareEffect(() => {
        const ac = new AbortController();
        if (!bool)
            return;
        toggleLoading(true);
        call(ac.signal)
            .then((res) => {
                callback(res);
                toggleLoading(false);
            })
            .catch(() => {
                if (!ac.signal.aborted) {
                    toaster();
                }
                toggleLoading(false)
            })
        return () => { ac.abort(); }
    }, dependencies)
}

