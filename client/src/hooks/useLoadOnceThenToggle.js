import { useState } from 'react';

const useLoadOnceThenToggle = () => {
    const [isOpen, toggle] = useState(false);
    const [wasLoaded, load] = useState(false);

    return [wasLoaded, isOpen, () => {
        if (!wasLoaded) load(true);
        toggle(!isOpen);
    }]
}

export default useLoadOnceThenToggle;