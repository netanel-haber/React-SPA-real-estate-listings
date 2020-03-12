const fetchPost = (path, body = {}, signal = undefined) => {
    return fetch(path, {
        method: 'POST',
        body: JSON.stringify(body),
        signal,
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => {
        if (res.status === 404 || res.status === 500)
            throw new Error("connection problem");
        return res;
    })
}


export default fetchPost;