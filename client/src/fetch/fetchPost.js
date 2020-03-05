const fetchPost = (path, body = {}, signal = undefined) => {
    return fetch(path, {
        method: 'POST',
        body: JSON.stringify(body),
        signal,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}


export default fetchPost;