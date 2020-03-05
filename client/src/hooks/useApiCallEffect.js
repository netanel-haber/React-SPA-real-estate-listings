import { useEffect } from 'react';
import toast from '../utilities/toast';

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

