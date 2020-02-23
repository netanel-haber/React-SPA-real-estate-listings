import { useState } from 'react';


const useLoadOnceThenToggle = () => {
    const [loading, done] = useState(true);
    return [loading, loading ? "hidden" : "visible", () => {
        done(false);
    }]
}

export default useLoadOnceThenToggle;