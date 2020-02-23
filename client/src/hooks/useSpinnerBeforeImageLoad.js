import { useState } from 'react';
import useTrackState from './useTrackState';

const useSpinnerBeforeImageLoad = (url) => {
    const [loading, done] = useState(true);
    let nevermind = false;
    useTrackState(url, () => {
        if (!nevermind)
            done(true)
    });
    return [loading, loading ? "none" : "inline", () => {
        done(false);
        nevermind = true;
    }]
}

export default useSpinnerBeforeImageLoad;