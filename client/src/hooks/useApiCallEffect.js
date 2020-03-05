import { useEffect } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { toast } from 'react-toastify';

const { HEB_TOAST_ERROR } = {
    HEB_TOAST_ERROR: "נראה שיש בעיית תקשורת. בדקו את החיבור לאינטרנט."
}

const toastConfig = {
    position: toast.POSITION.BOTTOM_CENTER,
    className: 'toast',
    autoClose: 2000,
    rtl: true,
    hideProgressBar: true
};

const useApiCallEffect = (apiCall, endCallbacks, dependencies = []) => {
    useEffect(() => {
        const abortController = new AbortController();
        apiCall(abortController.signal).then(endCallbacks).catch((ex) => {
            if (!abortController.signal.aborted && ex.toString() !== "-") {
                toast.error(HEB_TOAST_ERROR, toastConfig)
            }
        });
        return () => { abortController.abort() }
    }, dependencies)
};

const noop = () => { }
const useApiCallEffectDeepCompare = (apiCall, endCallbacks, dependencies, loadingState = noop) => {
    useDeepCompareEffect(() => {
        loadingState(true);
        const abortController = new AbortController();
        apiCall(abortController.signal)
            .then(res => res && endCallbacks(res))
            .then(() => { loadingState(false) })
            .catch(() => !abortController.signal.aborted && toast.error(HEB_TOAST_ERROR, toastConfig))
        return () => abortController.abort();
    }, [...dependencies])
};




export { useApiCallEffect, useApiCallEffectDeepCompare };
