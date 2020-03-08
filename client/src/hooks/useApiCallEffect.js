import toast from 'cogo-toast';
import React, { useEffect } from 'react';

import useDeepCompareEffect from 'use-deep-compare-effect';


const { HEB_TOAST_ERROR } = {
    HEB_TOAST_ERROR: "נראה שיש בעיית תקשורת. בדקו את החיבור לאינטרנט."
}

let toastCounter = 0;

const useApiCallEffect = (apiCall, endCallbacks, dependencies = []) => {
    useEffect(() => {
        const abortController = new AbortController();
        apiCall(abortController.signal).then(endCallbacks).catch((ex) => {
            if (!abortController.signal.aborted && ex.toString() !== "-") {
                toast.error(HEB_TOAST_ERROR);
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
                    if (toastCounter === 0) {
                        toastCounter++;
                        toast.error(<div className="toast">{HEB_TOAST_ERROR}</div>, { position: "bottom-center" })
                            .then(() => { toastCounter-- })
                    }
                }
                toggleLoading(false)
            })
        return () => { ac.abort(); }
    }, dependencies)
}

