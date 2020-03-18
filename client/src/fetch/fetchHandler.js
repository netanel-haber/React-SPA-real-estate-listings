import toaster from '../utilities/toaster';

const { HEB_TOAST_ERROR } = {
    HEB_TOAST_ERROR: "חלה שגיאה"
}

export default function fetchHandler(url, method = "GET", data, signal = undefined) {
    const token = localStorage.getItem('token');
    return new Promise((res, rej) => {
        fetch(url, {
            method,
            body: JSON.stringify(data),
            signal,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                ...(token && { "Authorization": `Bearer ${token}` })
            }
        })
            .then(result => {
                if (String(result.status).charAt(0) !== "2")
                    rej(result)
                res(result.status == 200 ? result.json() : result.status)
            })
            .catch(err => {
                (!signal.aborted) && toaster(err.status === 500 && HEB_TOAST_ERROR)
                rej(err);
            })
    })
}