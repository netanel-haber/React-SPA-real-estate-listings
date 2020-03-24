import refreshJwt from '../utilities/refreshJwt';
import successStatus from '../utilities/successStatus';
import toaster from '../utilities/toaster';
const { HEB_TOAST_ERROR } = {
    HEB_TOAST_ERROR: "חלה שגיאת רשת."
}


function fetchHandler(url, method = "GET", data, signal, optOutOfRefreshingToken = false) {
    const token = localStorage.getItem('token');
    (!optOutOfRefreshingToken && url.includes("listers")) && refreshJwt(token);
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
                if (!successStatus(result.status))
                    return rej(result);
                res(result.headers.get("Content-Type")?.includes("json") && result.json())
            })
            .catch(err => {
                (signal?.aborted === false) && toaster(err.status === 500 && HEB_TOAST_ERROR)
                rej(err);
            })
    })
}

export { fetchHandler as default };
