import toast from 'cogo-toast';
import React from 'react';
const { HEB_TOAST_ERROR } = {
    HEB_TOAST_ERROR: "נראה שיש בעיית תקשורת. בדקו את החיבור לאינטרנט."
}
let toastOn = false;


export default (msg = HEB_TOAST_ERROR, whatKind = "error") => {
    if (!toastOn) {
        toastOn = true;
        toast[whatKind](<div className="toast">{msg}</div>, { position: "bottom-center" })
            .then(() => { toastOn = false })
    }
}