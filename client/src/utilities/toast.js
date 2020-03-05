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


export default toast.error.bind(toast, HEB_TOAST_ERROR, toastConfig);