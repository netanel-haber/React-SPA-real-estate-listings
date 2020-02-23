import { useState, useEffect } from 'react';

const useTrackState = (state, restartProcess) => {
    const [trackState, changeUrl] = useState(state);
    useEffect(() => {
        if (trackState !== state) {
            restartProcess();
            changeUrl(state);
        }
    })
}

export default useTrackState;