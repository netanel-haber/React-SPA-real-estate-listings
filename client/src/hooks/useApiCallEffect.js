import { useEffect, useState } from 'react';
import toaster from '../utilities/toaster';
import useDeepCompareEffect from 'use-deep-compare-effect';



const useApiCallEffect = (apiCall, endCallbacks, dependencies = []) => {
    const [failedAuth, updateFailedAuth] = useState(false);
    useEffect(() => {
        const abortController = new AbortController();
        apiCall(abortController.signal)
            .then(endCallbacks)
            .catch((ex) => {
                if (!abortController.signal.aborted && ex.toString() !== "-") {
                    if (ex?.status === 401)
                        updateFailedAuth(true);
                    else
                        toaster();
                }
            });
        return () => { abortController.abort() }
    }, dependencies)
    return failedAuth;
};

export { useApiCallEffect };


export default (call, callback, toggleLoading, dependencies, bool = true) => {
    const [failedAuth, updateFailedAuth] = useState(false);
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
            .catch((ex) => {
                if (!ac.signal.aborted) {
                    if (ex?.status === 401)
                        updateFailedAuth(true);
                    else
                        toaster();
                }
                toggleLoading(false)
            })
        return () => { ac.abort(); }
    }, dependencies)
    return failedAuth;
}

