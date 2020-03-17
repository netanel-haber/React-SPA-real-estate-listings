import toaster from '../utilities/toaster';

const { HEB_TOAST_CONNECTION_ERROR, HEB_TOAST_ERROR } = {
    HEB_TOAST_CONNECTION_ERROR: "נראה שיש בעיית תקשורת. בדקו את החיבור לאינטרנט.",
    HEB_TOAST_ERROR: "חלה שגיאה"
}


export default function fetchHandler(url, method = "GET", data, signal = undefined) {
    return new Promise((res, rej) => {
        fetch(url, {
            method,
            body: JSON.stringify(data),
            signal,
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
            .then(result => {
                if (String(result.status).charAt(0) !== "2") {
                    if (result.status == 500)
                        toaster(HEB_TOAST_ERROR)
                    console.log(result);
                    rej(result)
                }
                res(result.status == 200 ? result.json() : result.status)
            })
            .catch(err => {
                console.log(err);
                toaster(HEB_TOAST_CONNECTION_ERROR)
                rej(err);
            })
    })
}