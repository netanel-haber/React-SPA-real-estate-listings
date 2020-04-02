import isJwtRefreshable from './isJwtRefreshable';
import toaster from './toaster';

const { HEB_TOAST_ERROR } = {
    HEB_TOAST_ERROR: "חלה שגיאת רשת."
}

function refreshJwt(jwt) {
    if (!jwt || !isJwtRefreshable(jwt))
        return;
    fetch('/api/listers/refresh-token', { method: "PATCH", headers: { ...(jwt && { "Authorization": `Bearer ${jwt}` }) } })
        .then(res => res.json())
        .then(({ newToken }) => {
            if (newToken) {
                console.log({ newToken });
                return localStorage.setItem("token", newToken)
            }
            throw new Error();
        })
        .catch(err => {
            err?.status && (toaster(err.status === 500 && HEB_TOAST_ERROR));
        })
}

export { refreshJwt as default };