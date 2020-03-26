import toast from 'cogo-toast';
import React from 'react';
const { HEB_TOAST_ERROR } = {
    HEB_TOAST_ERROR: "נראה שיש בעיית תקשורת. בדקו את החיבור לאינטרנט."
}
let toastOn = false;


export default (msg = HEB_TOAST_ERROR, whatKind = "error", hideAfter = 3) => {
    if (!toastOn) {
        toastOn = true;
        toast[whatKind](<div style={{ padding: "10px" }} className="toast">{msg}</div>, { position: "bottom-center", hideAfter })
            .then(() => { toastOn = false })
    }
}