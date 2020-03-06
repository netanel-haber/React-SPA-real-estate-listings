import { useEffect } from 'react';
import toast from '../utilities/toast';
import useDeepCompareEffect from 'use-deep-compare-effect';

const useApiCallEffect = (apiCall, endCallbacks, dependencies = []) => {
    useEffect(() => {
        const abortController = new AbortController();
        apiCall(abortController.signal).then(endCallbacks).catch((ex) => {
            if (!abortController.signal.aborted && ex.toString() !== "-") {
                toast();
            }
        });
        return () => { abortController.abort() }
    }, dependencies)
};

export { useApiCallEffect };


export default (call, callback, toggleLoading, dependencies, predicate = true) => {
    useDeepCompareEffect(() => {
        if (!predicate)
            return;
        toggleLoading(true);
        call()
        .then((res) => {
            callback(res);
            toggleLoading(false);
        })
        .catch(() => { toast(); toggleLoading(false) })
    }, dependencies)
}

